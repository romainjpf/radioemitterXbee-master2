const Promise = require('bluebird');

const retry = 4;

// wait time between signals in ms
const waitTimeBetweenSignals = 200;

module.exports = function(params){

	// if module serial is not present, we cannot contact the arduino
	if(!gladys.modules.serial || typeof gladys.modules.serial.sendCode !== 'function') {
		sails.log.error(`You need to install the serial module in Gladys.`);
		return Promise.reject(new Error('DEPENDENCY_MISSING'));
	}

	var code = '{"device_id":"' + params.deviceType.identifier + '","command":"' + params.state.value + '"}%';

	// send Xbee command through serial
	gladys.modules.serial.sendCode(`${code}`);

	return Promise.resolve();
};
