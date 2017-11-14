(function () {
  'use strict';

  angular
  .module('gladys')
  .controller('xbeeEmitterCtrl', xbeeEmitterCtrl);

  xbeeEmitterCtrl.$inject = ['$scope'];

  function xbeeEmitterCtrl($scope){
  sails.log.info('Xbee Emitter : xbeeEmitterCtrl');
  var vm = this;

  /* Method */
  vm.setLight = setLight;

  function setLight(value) {
    sails.log.info('Xbee Emitter : setLight');
      var device_id = {
        identifier: '13A20040AFDCA1',
        service: 'xbeeemitter'
      };

  gladys.device.getByIdentifier(device_id)
    .then(function(devices){
        gladys.deviceType.getByDevice(devices)
            .then(function(dt){
                var state = {
                    devicetype: dt[0].id,
                    value: 1
                };

                gladys.deviceType.exec(state)
                    .then(function(state){
                        // new state created
                    })
                    .catch(function(err){
                        // something bad happened !
                    });
                })
            .catch(function(err){
                // something bad happened !
            });

      })
      .catch(function(err){
        // something bad happened ! :/
    });
    }
  }
})();
