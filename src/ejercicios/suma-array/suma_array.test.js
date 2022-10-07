const { sumArray } = require("./suma_array.js");

describe("Suma un par del array", () => {
  it("arr=[1,5,0,1,2], num=13 retorna false", () => {
    expect(sumArray([1, 5, 0, 1, 2], 13)).toBe(false);
  });
  it("arr=[1,5,8,1,2], num=13 retorna [5,8]", () => {
    expect(sumArray([1, 5, 8, 1, 2], 13)).toEqual([5, 8]);
  });
  it("arr=[3,4,9,5,1], num=4 retorna [3,1]", () => {
    expect(sumArray([3, 4, 9, 5, 1], 4)).toEqual([3, 1]);
  });
  it("arr=[2,2,3,3], num 5 retorna [2,3]", () => {
    expect(sumArray([2, 2, 3, 3], 5)).toEqual([2, 3]);
  });
  it("arr=[0,0,0,0,1], num 1 retorna [0,1]", () => {
    expect(sumArray([0, 0, 0, 0, 1], 1)).toEqual([0, 1]);
  });
  it("arr=[1,3,1,9,4], num 2 retorna [1,1]", () => {
    expect(sumArray([1, 3, 1, 0, 4], 2)).toEqual([1, 1]);
  });
  it("arr=[0,0,0,0,0], num 0 retorna [0,0]", () => {
    expect(sumArray([0, 0, 0, 0, 0], 0)).toEqual([0, 0]);
  });
});
