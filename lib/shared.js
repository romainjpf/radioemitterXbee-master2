module.exports = {
  light_device : {
    name: 'Xbee Light',
    protocol: 'radio',
    service: 'xbeeemitter',
    identifier: '13A20040AFDCA1'
  },
  light_deviceTypes : [{
      type: 'binary',
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
        type: 'binary',
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
          sensor: false,
          min: 0,
          max: 1,
          display: true
        }]
}
