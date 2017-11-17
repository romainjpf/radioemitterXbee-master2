var Promise = require('bluebird');

module.exports = function() {
  //Delete the Xbee devices
  gladys.device.getByService({ service: 'xbeeemitter' })
  .then(function(devices){
    // foreach device
    return Promise.map(devices, function(device) {
      gladys.device.delete(device);
    });
  });

  sails.log.info('Xbee Emitter : Module uninstalled');
  return Promise.resolve();

}
