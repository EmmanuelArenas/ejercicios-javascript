const { eliminaRepetidos } = require("./elimina_repetidos.js");

describe("Elimina Repetidos", function () {
  it("arr=[1,3,4,1,2,3,4,5] retorna [1,3,4,2,5]", function () {
    expect(eliminaRepetidos([1, 3, 4, 1, 2, 3, 4, 5])).toEqual([1, 3, 4, 2, 5]);
  });
  it('arr=["hola","mundo","mundo","del","desarrollo","del"] retorna [ "hola", "mundo", "del", "desarrollo" ]', function () {
    expect(
      eliminaRepetidos(["hola", "mundo", "mundo", "del", "desarrollo", "del"])
    ).toEqual(["hola", "mundo", "del", "desarrollo"]);
  });
  it('arr=["tengo",90, "años",90, "viviendo", "tengo","en","en","mi","país","país"] retorna [ "tengo", 90, "años", "viviendo", "en", "mi", "país" ]', function () {
    expect(
      eliminaRepetidos([
        "tengo",
        90,
        "años",
        90,
        "viviendo",
        "tengo",
        "en",
        "en",
        "mi",
        "país",
        "país",
      ])
    ).toEqual(["tengo", 90, "años", "viviendo", "en", "mi", "país"]);
  });
  it('arr=[1,3,1,"hola","hola",true,false,false,true] retorna [1,3,"hola",true,false]', function () {
    expect(
      eliminaRepetidos([1, 3, 1, "hola", "hola", true, false, false, true])
    ).toEqual([1, 3, "hola", true, false]);
  });
});
