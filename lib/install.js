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
  }

  // Create the box type
  gladys.boxType.create(boxType)
  .then(function() {
    return gladys.device.create({device: shared.device, types: shared.deviceTypes});
  })
  .then(function() {
    sails.log.info('Xbee Emitter : Module installed');
    //return new Promise.resolve();
  })
  .catch(function(err) {
    sails.log.warn('Xbee Emitter : Failed to install module');
    sails.log.warn(err);
  });
}
