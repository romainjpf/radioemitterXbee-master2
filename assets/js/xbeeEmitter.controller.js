(function () {
  'use strict';

  angular
  .module('gladys')
  .controller('xbeeEmitterCtrl', xbeeEmitterCtrl);

  function xbeeEmitterCtrl(){

    var vm = this;

    /* Method */
    vm.setLight = setLight;

    function setLight(value) {
      var device_id = {
    identifier: '13A20040AFDCA1',
    service: 'xbeeEmitter'
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
