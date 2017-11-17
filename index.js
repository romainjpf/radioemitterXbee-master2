module.exports = function(sails) {

    var exec = require('./lib/exec.js');
    var install = require('./lib/install.js');
    var uninstall = require('./lib/uninstall.js');
    var initialize = require('./lib/initialize.js');

    return {
        install: install,
        uninstall: uninstall,
        initialize: initialize,
        exec: exec
    };
};
