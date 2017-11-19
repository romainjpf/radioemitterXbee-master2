var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function() {
  //Delete the Xbee devices
  gladys.device.getByService({ service: 'xbeeemitter' })
  .then(function(devices){
    // foreach device
    return Promise.map(devices, function(device) {
      gladys.device.delete(device);
    });
  });

  //Delete the box type
  gladys.boxType.getAll()
  .then(function(boxTypes){
    // foreach boxType
    return Promise.map(boxTypes, function(boxType) {
      if(boxType.title == shared.boxType.title){
        gladys.boxType.delete(boxType);
      }
    });
  });

  sails.log.info('Xbee Emitter : Module uninstalled');
  return Promise.resolve();

}
