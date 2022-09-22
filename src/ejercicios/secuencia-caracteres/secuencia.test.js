const { secuencia } = require("./secuencia.js");

describe("Secuencia de caracteres", function () {
  it(" '' debe devolver true", function () {
    expect(secuencia("")).toBe(true);
  });
  it("[] debe devolver true", function () {
    expect(secuencia("[]")).toBe(true);
  });
  it("()[]{} debe devolver true", function () {
    expect(secuencia("()[]{}")).toBe(true);
  });
  it("({}) debe devolver true", function () {
    expect(secuencia("({})")).toBe(true);
  });
  it("[[(({()}))]]{()}[({})] debe devolver true", function () {
    expect(secuencia("[[(({()}))]]{()}[({})]")).toBe(true);
  });
  it("(} debe devolver false", function () {
    expect(secuencia("[}")).toBe(false);
  });
  it("([) debe devolver false", function () {
    expect(secuencia("([)")).toBe(false);
  });
  it("(){ debe devolver false", function () {
    expect(secuencia("(){")).toBe(false);
  });
  it("((]([)] debe devolver false", function () {
    expect(secuencia("((]([)]")).toBe(false);
  });
  it("][ debe devolver false", function () {
    expect(secuencia("][")).toBe(false);
  });
});
