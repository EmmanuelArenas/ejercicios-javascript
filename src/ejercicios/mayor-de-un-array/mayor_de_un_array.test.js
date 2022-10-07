const { mayorDeUnArray } = require("./mayor_de_un_array.js");

describe("Número mayor de un array", () => {
  it("arr=[3,9,1,4,8] retorna 9", () => {
    expect(mayorDeUnArray([3, 9, 1, 4, 8])).toBe(9);
  });
  it("arr=[-1,-5,-9,-2,-5,-3] retorna -1", () => {
    expect(mayorDeUnArray([-1, -5, -9, -2, -5, -3])).toBe(-1);
  });
  it("arr=[9,9,9,9,9] retorna 9", () => {
    expect(mayorDeUnArray([9, 9, 9, 9, 9])).toBe(9);
  });
  it("arr=[-4,-9,-1,0] retorna 0", () => {
    expect(mayorDeUnArray([-4, -9, -1, 0])).toBe(0);
  });
});
