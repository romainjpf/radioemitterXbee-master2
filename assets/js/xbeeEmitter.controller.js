(function () {
  'use strict';

  angular
  .module('gladys')
  .controller('xbeeemitterCtrl', xbeeEmitterCtrl);

  xbeeEmitterCtrl.$inject = ['deviceService', '$scope'];

  function xbeeEmitterCtrl(deviceService, $scope){
    sails.log.info('Xbee Emitter : xbeeemitterCtrl');
    var vm = this;

    vm.deviceTypes = {};

    /* Method */
    vm.setLight = setLight;

    getGenericData();

    function getGenericData(){
      // Get devices xbeeemitter
      .then(function() {
        return deviceService.get();
      })
      .then(function(devices) {
        for(var i = 0; i < devices.data.length; i++) {
          if(devices.data[i].service === 'xbeeemitter'){
            // get device xbeeemitter
            var dev = devices.data[i].id;

            // get deviceType
            deviceService.getDeviceTypesDevice(dev)
            .then(function(deviceTypes){
              for(var i = 0; i < deviceTypes.data.length; i++) {
                if(deviceTypes.data[i].identifier === 'light') vm.deviceTypes.light = deviceTypes.data[i].id;
                if(deviceTypes.data[i].identifier === 'heating') vm.deviceTypes.heating = deviceTypes.data[i].id;
                if(deviceTypes.data[i].identifier === 'curtain') vm.deviceTypes.curtain = deviceTypes.data[i].id;
              }
            })
          }
        }
      })
    }

    function setLight(value) {
      sails.log.info('Xbee Emitter : setLight');
      deviceService.exec(vm.deviceTypes.light, value);
    }
  }
})();
