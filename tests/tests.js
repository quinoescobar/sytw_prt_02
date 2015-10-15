var expect = chai.expect;

describe("Testing con BDD", function() {

  describe("Temperatura", function() {
    it("Deberia tener un campo valor", function() {
      var paraCalcular = new Temperatura();
      paraCalcular.setValor(43);
      paraCalcular.setTipo("Faren");
      expect(paraCalcular.getValor).to.equal("123456789");
    });

    it("should set cow's name if provided", function() {
      var cow = new Cow("Kate");
      expect(cow.name).to.equal("Kate");
    });
  });

  describe("#calcular", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Temperatura()).calcular("43X");
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var calculado = (new Temperatura("43F")).calcular();
      expect(calculado).to.equal("6.1 Celsius");
    });
  });
});
