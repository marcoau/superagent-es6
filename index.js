var request = require('superagent');
var Request = request.Request;

Request.prototype.then = function() {
  var req = this;
  var promise = new Promise(function(resolve, reject) {
    req.end(function(err, res) {
      if(err) return reject(err);
      resolve(res);
    });
  });

  return promise.then.apply(promise, arguments);
};

Request.prototype.catch = function() {
  var req = this;
  var promise = new Promise(function(resolve, reject) {
    req.end(function(err, res) {
      if(err) return reject(err);
      resolve(res);
    });
  });

  return promise.catch.apply(promise, arguments);
};

module.exports = request;
