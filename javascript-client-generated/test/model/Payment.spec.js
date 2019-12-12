/*
 * API Pagamentos
 * Este é um exemplo de serviço de validação de pagamentos
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiPagamentos);
  }
}(this, function(expect, ApiPagamentos) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Payment', function() {
      beforeEach(function() {
        instance = new ApiPagamentos.Payment();
      });

      it('should create an instance of Payment', function() {
        // TODO: update the code to test Payment
        expect(instance).to.be.a(ApiPagamentos.Payment);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

    });
  });

}));