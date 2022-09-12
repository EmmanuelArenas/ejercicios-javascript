const { titulo } = require("./titulo.js");

describe("Título", function () {
  it("hola mundo -> Hola Mundo", function () {
    expect(titulo("hola mundo")).toBe("Hola Mundo");
  });
  it("jaVaScript eS un gRan Lenguaje-> Javascript Es Un Gran Lenguaje", function () {
    expect(titulo("jaVaScript eS un gRan Lenguaje")).toBe(
      "Javascript Es Un Gran Lenguaje"
    );
  });
  it("EL CAMINO DE LA PROGRAMACION-> El Camino De La Programacion", function () {
    expect(titulo("EL CAMINO DE LA PROGRAMACION")).toBe(
      "El Camino De La Programacion"
    );
  });
});
