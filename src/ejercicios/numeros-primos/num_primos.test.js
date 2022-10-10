const { numPrimos } = require("./num_primos.js");

describe("Numeros Primos", () => {
  it("numPrimos retorna un array", () => {
    expect(numPrimos(10)).toBeInstanceOf(Array);
  });
  it("num = 10 retorna [2,3,5,7]", () => {
    expect(numPrimos(10)).toEqual([2, 3, 5, 7]);
  });
  it("num = 2 retorna [2]", () => {
    expect(numPrimos(2)).toEqual([2]);
  });
  it("num = 1 retorna []", () => {
    expect(numPrimos(1)).toEqual([]);
  });
  it("num = 0 retorna []", () => {
    expect(numPrimos()).toEqual([]);
  });
  it("num = 15 retorna [2,3,5,7,11,13]", () => {
    expect(numPrimos(15)).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it("num = 5 retorna [2,3,5]", () => {
    expect(numPrimos(5)).toEqual([2, 3, 5]);
  });
});
