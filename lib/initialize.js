var path = require('path');
var fs = require('fs');
var Promise = require('bluebird');
var ncp = Promise.promisify(require('ncp').ncp);
var loader = require("sails-util-mvcsloader")(sails);

var path = __dirname;

module.exports = function(cb) {
  var promises = [];

  var hookDirName = path.split('/');
  hookDirName = hookDirName[hookDirName.length-2];
  var assetsDir = path + '/../assets';
  var destAssets = sails.config.appPath + '/assets/hooks/' + hookDirName;
  var options = {
    clobber: true
  };
  promises.push(ncp(assetsDir, destAssets, options));

  Promise.all(promises)
  .then(function(){
    return cb();
  })
  .catch(function(err) {
    sails.log.error(err);
    return cb(err);
  });
};
