const { cambioSigno } = require("./cambio_signo.js");

describe("Cambio de signo", function () {
  it("Número -4 retorna 4", function () {
    expect(cambioSigno(-4)).toBe(4);
  });
  it("Número 8 retorn -8", function () {
    expect(cambioSigno(-8)).toBe(8);
  });
  it("Número -4.2 retorna 4.2", function () {
    expect(cambioSigno(4.2)).toBe(-4.2);
  });
  it("Número 9.2 retorna -9.2", function () {
    expect(cambioSigno(9.2)).toBe(-9.2);
  });
});
