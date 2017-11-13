module.exports = function(sails) {

    var exec = require('./lib/exec.js');
    var install = require('./lib/install.js');
    var initialize = require('./lib/initialize.js');

    return {
        install: install,
        initialize: initialize,
        exec: exec
    };
};
