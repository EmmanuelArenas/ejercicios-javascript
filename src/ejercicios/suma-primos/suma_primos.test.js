const { sumaPrimos } = require("./suma_primos.js");

describe("Suma de números primos", () => {
  it("num = 97 debe retornar 1060", () => {
    expect(sumaPrimos(97)).toBe(1060);
  });
  it("num = 10 retorna 17", () => {
    expect(sumaPrimos(10)).toBe(17);
  });
  it("num = 5 retorna 10", () => {
    expect(sumaPrimos(5)).toBe(10);
  });
  it("num = 2 retorna 2", () => {
    expect(sumaPrimos(2)).toBe(2);
  });
});
