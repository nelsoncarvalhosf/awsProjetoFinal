'use strict';


/**
 * Retorno do antifaude
 * Retorno do serviço de antifraude para validação de dados do pagamento
 *
 * authorization String Token de acesso obtido no endpoint de autenticação
 * code Authorization 
 * returns Object
 **/
exports.antifraud = function(authorization,code) {
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
 * Pagamento Aprovado
 * Recebe do serviço do banco informação que o valor foi pago pelo cartão ou o boleto foi pago
 *
 * authorization String Token de acesso obtido no endpoint de autenticação
 * code Authorization 
 * returns Object
 **/
exports.complete = function(authorization,code) {
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

