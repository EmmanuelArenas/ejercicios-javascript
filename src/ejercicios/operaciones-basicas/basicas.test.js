const { suma, resta, multiplicacion, division } = require("./basicas.js");

describe("Suma de dos números", function () {
  it("La suma de 0 mas 0 es 0", function () {
    expect(suma(0, 0)).toBe(0);
  });
  it("La suma de 0 mas 1 es 1", function () {
    expect(suma(0, 1)).toBe(1);
  });
  it("La suma de 3 mas 5 es 1", function () {
    expect(suma(3, 5)).toBe(8);
  });
});

describe("Resta de dos números", function () {
  it("La resta de 3 menos 3 es 0", function () {
    expect(resta(3, 3)).toBe(0);
  });
  it("La resta de 5 menos 3 es 2", function () {
    expect(resta(5, 3)).toBe(2);
  });
  it("La resta de 3 menos 5 es -2", function () {
    expect(resta(3, 5)).toBe(-2);
  });
  it("La resta de -3 menos 3 es -6", function () {
    expect(resta(-3, 3)).toBe(-6);
  });
  it("La resta de 3 menos -1 es 4", function () {
    expect(resta(3, -1)).toBe(4);
  });
});

describe("Multiplicación de dos números", function () {
  it("La multiplicación de 0 por 0 es 0", function () {
    expect(multiplicacion(0, 0)).toBe(0);
  });
  it("La multiplicación de 0 por 1 es 0", function () {
    expect(multiplicacion(0, 1)).toBe(0);
  });
  it("La multiplicación de 2 por 0 es 0", function () {
    expect(multiplicacion(2, 0)).toBe(0);
  });
  it("La multiplicación de -1 por 3 es -3", function () {
    expect(multiplicacion(-1, 3)).toBe(-3);
  });
  it("La multiplicación de -2 por -2 es 4", function () {
    expect(multiplicacion(-2, -2)).toBe(4);
  });
  it("La multiplicación de 5 por -3 es -15", function () {
    expect(multiplicacion(5, -3)).toBe(-15);
  });
  it("La multiplicación de 5 por 3 es 15", function () {
    expect(multiplicacion(5, 3)).toBe(15);
  });
  it("La multiplicación de 1 por 6 es 6", function () {
    expect(multiplicacion(1, 6)).toBe(6);
  });
});

describe("División de dos números", function () {
  it("La división de 0 entre 0 es NaN", function () {
    expect(division(0, 0)).toBe(NaN);
  });
  it("La division de 0 entre 1 es 0 ", function () {
    expect(division(0, 1)).toBe(0);
  });
  it("La division de 1 entre 0 es Infinito ", function () {
    expect(division(1, 0)).toBe(Infinity);
  });
  it("La division de 1 entre 1 es 1 ", function () {
    expect(division(1, 1)).toBe(1);
  });
  it("La division de 1 entre 2 es 0.5 ", function () {
    expect(division(1, 2)).toBe(0.5);
  });
  it("La division de 8 entre 2 es 4 ", function () {
    expect(division(8, 2)).toBe(4);
  });
  it("La division de -6 entre 2 es -3 ", function () {
    expect(division(-6, 2)).toBe(-3);
  });
  it("La division de 6 entre -2 es -3 ", function () {
    expect(division(6, -2)).toBe(-3);
  });
  it("La division de -6 entre -2 es 3 ", function () {
    expect(division(-6, -2)).toBe(3);
  });
});

division(-6, -2); //3
