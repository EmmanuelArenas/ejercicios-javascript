const { finalIdentico } = require("./final_identico");

describe("Final Identico", function () {
  it("cadena= Hola mundo, final=do retorna true", function () {
    expect(finalIdentico("Hola mundo", "do")).toBe(true);
  });
  it("cadena= Hola mundo, final=do retorna true", function () {
    expect(finalIdentico("Hola mundo", "mundo")).toBe(true);
  });
  it("cadena= Hola mundo, final=do retorna false", function () {
    expect(finalIdentico("Hola mundo", "H")).toBe(false);
  });
  it("cadena= otoños, final=o retorna false", function () {
    expect(finalIdentico("otoños", "o")).toBe(false);
  });
});
