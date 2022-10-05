const { letraFaltante } = require("./letra_faltante.js");

describe("Letra faltante", function () {
  it("str = 'abc' retorna 'Completa'", function () {
    expect(letraFaltante("abc")).toBe("Completa");
  });
  it("str = 'cdf' retorna 'e'", function () {
    expect(letraFaltante("cdf")).toBe("e");
  });
  it("str = 'ghjk' retorna 'i'", function () {
    expect(letraFaltante("ghjk")).toBe("i");
  });
  it("str = 'j' retorna 'Completa'", function () {
    expect(letraFaltante("j")).toBe("Completa");
  });
  it("str = 'stvwxz' retorna 'u'", function () {
    expect(letraFaltante("stvwxz")).toBe("u");
  });
});
