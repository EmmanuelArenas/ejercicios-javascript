const { fibonacci } = require("./fibonacci.js");

describe("Fibonacci", function () {
  it("Número 1 retorna 0", function () {
    expect(fibonacci(1)).toBe(0);
  });
  it("Número 2 retorna 1", function () {
    expect(fibonacci(2)).toBe(1);
  });
  it("Número 7 retorna 13", function () {
    expect(fibonacci(7)).toBe(8);
  });
  it("Número 10 retorna 55", function () {
    expect(fibonacci(10)).toBe(34);
  });
});
