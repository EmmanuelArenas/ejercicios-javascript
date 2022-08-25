const { factorial } = require("./factorial.js");

describe("Factorial de un numero", function () {
  it("El factorial de 6 es 720", function () {
    expect(factorial(6)).toBe(720);
  });
  it("El factorial de 0 es 1", function () {
    expect(factorial(0)).toBe(1);
  });
  it("El factorial de 1 es 1", function () {
    expect(factorial(1)).toBe(1);
  });
  it("El factorial de 2 es 2", function () {
    expect(factorial(2)).toBe(2);
  });
  it("La funcion no acepta numeros negativos", function () {
    expect(factorial(-1)).toBe("No acepta negativos");
  });
});
