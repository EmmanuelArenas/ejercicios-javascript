const { palindromo } = require("./palindromo.js");

describe("Palindromo", () => {
  it("Tipo de dato Boolean", () => {
    expect(palindromo("oso")).toBe(
      typeof true === "boolean" || typeof false === "boolean"
    );
  });
  it("str='Hola mundo' retorna false", () => {
    expect(palindromo("Hola mundo")).toBe(false);
  });
  it("str='anita lava la tina' retorna true", () => {
    expect(palindromo("anita lava la tina")).toBe(true);
  });
  it("str='AniTA Lava_la*Tina' retorna true", () => {
    expect(palindromo("AniTA Lava la Tina")).toBe(true);
  });
  it("str='-%1-0*0_1#' retorna true", () => {
    expect(palindromo("-%1-0*0_1#")).toBe(true);
  });
  it("str='I_sa?ac* no_ronca-asi' retorna true", () => {
    expect(palindromo("I_sa?ac* no_ronca-asi")).toBe(true);
  });
});
