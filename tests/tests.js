var expect = chai.expect;

describe("Calcular", function() {

  // describe("constructor", function() {
  //   it("should have a default name", function() {
  //     var cow = new Cow();
  //     expect(cow.name).to.equal("Anon cow");
  //   });
  //
  //   it("should set cow's name if provided", function() {
  //     var cow = new Cow("Kate");
  //     expect(cow.name).to.equal("Kate");
  //   });
  // });

  describe("#calcular", function() {
    it("should throw if no target is passed in", function() {
      expect(function() {
        (new Temperatura()).greets();
      }).to.throw(Error);
    });

    it("should greet passed target", function() {
      var calculado = (new Temperatura("43F")).calcular();
      expect(calculado).to.equal("6.1 Celsius");
    });
  });
});
