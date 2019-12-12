'use strict';


/**
 * Gera boleto
 * Mostra o boleto para pagamento
 *
 * id BigDecimal Identificador da compra
 * no response value expected for this operation
 **/
exports.getBillet = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna o status do pagamento
 * Identifica o pagamento pelo seu ID
 *
 * authorization String Token de acesso obtido no endpoint de autenticação
 * id BigDecimal Identificador da compra
 * returns Object
 **/
exports.getPagamento = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Registrar Pedido
 * Registra pedido de pagamento iniciando processo de compra
 *
 * authorization String Token de acesso obtido no endpoint de autenticação
 * buy Buy  (optional)
 * returns Object
 **/
exports.setPagamento = function(authorization,buy) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

