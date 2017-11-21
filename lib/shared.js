var box = require('./boxContent.js');

module.exports = {

  boxType : {
    uuid: '05b30084-c6db-11e7-abc4-cec278b6b50a',
    title: 'Xbee Emitter',
    ngcontroller: 'xbeeemitterCtrl as vm',
    html: box.html,
    footer: box.footer,
    icon: 'fa fa-flash',
    type: 'box box-primary',
    view: 'dashboard'
  },

  light_device : {
    name: 'Xbee Light',
    protocol: 'radio',
    service: 'xbeeemitter',
    identifier: '13A20040AFDCA1'
  },
  light_deviceTypes : [{
      type: 'binary',
      identifier: 'light',
      sensor: false,
      min: 0,
      max: 1,
      display: true
    }],

    heating_device : {
      name: 'Xbee Heating',
      protocol: 'radio',
      service: 'xbeeemitter',
      identifier: '13A20040A74094'
    },
    heating_deviceTypes : [{
        type: 'mode',
        identifier: 'heating',
        sensor: false,
        min: 1,
        max: 4,
        display: true
      }],

      curtain_device : {
        name: 'Xbee Curtain',
        protocol: 'radio',
        service: 'xbeeemitter',
        identifier: '13A20040A74885'
      },
      curtain_deviceTypes : [{
          type: 'binary',
          identifier: 'curtain',
          sensor: false,
          min: 0,
          max: 1,
          display: true
        }]
}
