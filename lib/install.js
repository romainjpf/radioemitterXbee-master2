var Promise = require('bluebird');
var shared = require('./shared.js');

module.exports = function() {

  // Create the box type
  gladys.boxType.create(shared.boxType);

  // create the xbee light device
  gladys.device.create({device: shared.light_device, types: shared.light_deviceTypes});

  // create the xbee light device
  gladys.device.create({device: shared.heating_device, types: shared.heating_deviceTypes});

  // create the xbee light device
  gladys.device.create({device: shared.curtain_device, types: shared.curtain_deviceTypes});

  sails.log.info('Xbee Emitter : Module installed');

  return Promise.resolve();

};
