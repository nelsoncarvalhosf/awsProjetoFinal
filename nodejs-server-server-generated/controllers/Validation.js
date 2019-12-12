'use strict';

var utils = require('../utils/writer.js');
var Validation = require('../service/ValidationService');

module.exports.antifraud = function antifraud (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var code = req.swagger.params['code'].value;
  Validation.antifraud(authorization,code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.complete = function complete (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var code = req.swagger.params['code'].value;
  Validation.complete(authorization,code)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
