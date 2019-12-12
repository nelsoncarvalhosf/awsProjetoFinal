'use strict';

var utils = require('../utils/writer.js');
var Payment = require('../service/PaymentService');

module.exports.getBillet = function getBillet (req, res, next) {
  var id = req.swagger.params['id'].value;
  Payment.getBillet(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPagamento = function getPagamento (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var id = req.swagger.params['id'].value;
  Payment.getPagamento(authorization,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setPagamento = function setPagamento (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var buy = req.swagger.params['buy'].value;
  Payment.setPagamento(authorization,buy)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
