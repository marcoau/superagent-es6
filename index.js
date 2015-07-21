var request = require('superagent');
var Request = request.Request;

Request.prototype._getPromise = function() {
  var req = this;
  return new Promise(function(resolve, reject) {
    req.end(function(err, res) {
      if(err) return reject(err);
      resolve(res);
    });
  });
};

Request.prototype.then = function() {
  var promise = this._getPromise();
  return promise.then.apply(promise, arguments);
};

Request.prototype.catch = function() {
  var promise = this._getPromise();
  return promise.catch.apply(promise, arguments);
};

module.exports = request;
