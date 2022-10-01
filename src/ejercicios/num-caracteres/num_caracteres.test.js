const { numCaracteres } = require("./num_caracteres.js");

describe("Numero de Caracteres", function () {
  it("str='Hola mundo' retorna 10", function () {
    expect(numCaracteres("Hola mundo")).toBe(10);
  });
  it("str='HolaMundo' retorna 9", function () {
    expect(numCaracteres("HolaMundo")).toBe(9);
  });
  it("str='Mi sueldo es de $5,000' retorna 22", function () {
    expect(numCaracteres("Mi sueldo es de $5,000")).toBe(22);
  });
});
