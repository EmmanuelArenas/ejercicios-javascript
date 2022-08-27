const {
  celciusAFahrenheit,
  fahrenheitACelcius,
  fahrenheitAKelvin,
} = require("./temperatura.js");

describe("De Celcius a Fahrenheit", function () {
  it("23°C es igual a 73°F", function () {
    expect(celciusAFahrenheit(23)).toBe(73);
  });
  it("0°C es igual a 32°F", function () {
    expect(celciusAFahrenheit(0)).toBe(32);
  });
  it("38°C es igual a 100°F", function () {
    expect(celciusAFahrenheit(38)).toBe(100);
  });
  it("-17.5°C es igual a 0°F", function () {
    expect(celciusAFahrenheit(-17.5)).toBe(0);
  });
});

describe("De Fahrenheit a Celcius", function () {
  it("10°F es igual a -12°C", function () {
    expect(fahrenheitACelcius(10)).toBe(-12);
  });
  it("32°F es igual a 0°C", function () {
    expect(fahrenheitACelcius(32)).toBe(0);
  });
  it("100°F es igual a 38°C", function () {
    expect(fahrenheitACelcius(100)).toBe(38);
  });
  it("0°F es igual a -17°C", function () {
    expect(fahrenheitACelcius(0)).toBe(-17);
  });
});

describe("De Fahrenheit a Kelvin", function () {
  it("-460°F es igual a 0°F", function () {
    expect(fahrenheitAKelvin(-460)).toBe(0);
  });
  it("0°F es igual a 255°F", function () {
    expect(fahrenheitAKelvin(0)).toBe(255);
  });
  it("100°F es igual a 311°F", function () {
    expect(fahrenheitAKelvin(100)).toBe(311);
  });
  it("-280°F es igual a 100°F", function () {
    expect(fahrenheitAKelvin(-280)).toBe(100);
  });
});
