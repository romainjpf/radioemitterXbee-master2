var Promise = require('bluebird');
var box = require('./boxContent.js');
var shared = require('./shared.js');

module.exports = function() {
  var boxType = {
    uuid: '05b30084-c6db-11e7-abc4-cec278b6b50a',
    title: 'Xbee Emitter',
    ngcontroller: 'xbeeEmitterCtrl as vm',
    html: box.html,
    footer: box.footer,
    icon: 'fa fa-flash',
    type: 'box box-primary',
    view: 'dashboard'
  };

  // Create the box type
  gladys.boxType.create(boxType);

  // create the xbee light device
  gladys.device.create({device: shared.light_device, types: shared.light_deviceTypes});

  // create the xbee light device
  gladys.device.create({device: shared.heating_device, types: shared.heating_deviceTypes});

  // create the xbee light device
  gladys.device.create({device: shared.curtain_device, types: shared.curtain_deviceTypes});

  sails.log.info('Xbee Emitter : Module installed');

  return Promise.resolve();

};
