var loader = require('sails-util-mvcsloader')(sails);

module.exports = function(next) {
      loader.injectControllers( __dirname + '/assets/js', function(err){
                    next(err);
    });
};
