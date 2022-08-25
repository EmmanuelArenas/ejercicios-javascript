const { palabraMasLarga } = require("./palabra.js");

const str = "Me gustan los retos por eso resuelvo ejercicios en Javascript";

describe("Palabra mas larga de una oración", function () {
  it("La palabra mas larga de la frase 'Me gustan los retos por eso resuelvo ejercicios en Javascript' es Javascript con 10 caracteres", function () {
    expect(palabraMasLarga(str)).toEqual(["Javascript", 10]);
  });
  it("La palabra mas larga de la frase 'Murcielago es una palabra larga' es Murcielago con 10 caracteres", function () {
    expect(palabraMasLarga("Murcielago es una palabra larga")).toEqual([
      "Murcielago",
      10,
    ]);
  });
  it("La palabra mas larga de la frase 'Tren es mas corto que Ferrocarril' es Ferrocarril con 11 caracteres", function () {
    expect(palabraMasLarga("Tren es mas corto que Ferrocarril")).toEqual([
      "Ferrocarril",
      11,
    ]);
  });
});
