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

  var boxId = { id: shared.boxType.uuid };

  //Delete the box type
  gladys.boxType.delete(boxId);

  sails.log.info('Xbee Emitter : Module uninstalled');
  return Promise.resolve();

}
