const { minimoComunMultiplo } = require("./mcm.js");

describe("Mínimo Común Múltiplo", function () {
  it("arr=[0,0] retorna 0", function () {
    expect(minimoComunMultiplo([0, 0])).toBe(0);
  });
  it("arr=[0,3] retorna 0", function () {
    expect(minimoComunMultiplo([0, 3])).toBe(0);
  });
  it("arr=[10,2] retorna 2520", function () {
    expect(minimoComunMultiplo([10, 2])).toBe(2520);
  });
  it("arr=[2,10] retorna 2520", function () {
    expect(minimoComunMultiplo([2, 10])).toBe(2520);
  });
  it("arr=[1,3] retorna 6", function () {
    expect(minimoComunMultiplo([1, 3])).toBe(6);
  });
  it("arr=[28, 23] retorna 11302200", function () {
    expect(minimoComunMultiplo([28, 23])).toBe(11302200);
  });
  it("arr=[-2, 3] retorna 0", function () {
    expect(minimoComunMultiplo([-2, 3])).toBe(0);
  });
  it("arr=[2, 0] retorna 0", function () {
    expect(minimoComunMultiplo([2, 0])).toBe(0);
  });
});
