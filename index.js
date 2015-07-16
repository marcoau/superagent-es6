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

module.exports = request;
