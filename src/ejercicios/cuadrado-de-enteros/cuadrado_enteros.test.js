const { cuadradoEnteros } = require("./cuadrado_enteros.js");

describe("Cuadrado de Enteros", () => {
  it("cuadradoEnteros([5,9,2]) retorna un Array", () => {
    expect(cuadradoEnteros([5, 9, 2])).toBeInstanceOf(Array);
  });
  it("arr=[-9,3, 3.0, 8.2, 0 ,2] retorna [9,9,4]", () => {
    expect(cuadradoEnteros([-9, 3, 3.0, 8.2, 0, 2])).toEqual([9, 9, 4]);
  });
  it("arr=[0,1,-4,0.3,9,2,9.2,5.0] retorna [1,81,4,25]", () => {
    expect(cuadradoEnteros([0, 1, -4, 0.3, 9, 2, 9.2, 5.0])).toEqual([
      1, 81, 4, 25,
    ]);
  });
});
