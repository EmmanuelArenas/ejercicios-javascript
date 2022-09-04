const { numerosMasGrandes } = require("./num_mayores.js");

const array = [
  [1, 4, 2],
  [5, 3, 8],
  [10, 2, 43],
  [-1, 0, 1],
];
const array2 = [
  [1, -4, 2],
  [5, 3, 8],
  [-1, 0, -5],
];

const array3 = [
  [0, -4, -2],
  [0, 0, 0],
];

describe("Número mas grande en un array anidado", function () {
  it("Del array=[[1,4,2],[5,3,8],[10,2,43],[-1,0,1]]", function () {
    expect(numerosMasGrandes(array)).toEqual([4, 8, 43, 1]);
  });
  it("Del array=[[1,-4,2],[5,3,8],[-1,0,-5]])", function () {
    expect(numerosMasGrandes(array2)).toEqual([2, 8, 0]);
  });
  it("Del array=[[0,-4,-2],[0,0,0]]) ", function () {
    expect(numerosMasGrandes(array3)).toEqual([0, 0]);
  });
});
