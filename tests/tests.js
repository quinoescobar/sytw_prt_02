var expect = chai.expect;

describe("Testing con BDD", function() {

  describe("Temperatura", function() {
    it("Deberia poder crearse un objeto Temperatura", function() {
      var paraCalcular = new Temperatura();
      // var should = require('chai.js').should();
      expect(paraCalcular).to.be.an('object');
    });
    it("Deberia tener un campo valor", function() {
      var paraCalcular = new Temperatura();
      paraCalcular.setValor(123456789);
      paraCalcular.setTipo("Faren");
      expect(paraCalcular.getValor()).to.equal(123456789);
    });

    it("Deberia tener un campo tipo", function() {
      var paraCalcular = new Temperatura();
      paraCalcular.setValor(123456789);
      paraCalcular.setTipo("Farenheit");
      expect(paraCalcular.getTipo()).to.equal("Farenheit");
    });
  });

  describe("#Calculando:Converting", function() {
    it("Deberia sacar error al introducir 43X", function() {
      expect(function() {
        (new Temperatura()).calcular("43X");
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var calculado = new Temperatura();
      calculado.setValor();
      calculado.setTipo();
      expect(calculado).to.equal("6.1 Celsius");
    });
  });
});
