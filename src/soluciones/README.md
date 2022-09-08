## Recuerda intentarlo antes de venir a ver las respuestas.

### Índice.

- [Factorial](#factorial)
- [Final Identico](#final-identico)
- [Números Mayores](#números-mayores)
- [Operaciones Basicas](#operaciones-basicas)
- [Palabra Mas Larga](#palabra-mas-larga)
- [Temperatura](#temperatura)

### Factorial

**Factorial con ciclo for**

```js
const factorialFor = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
factorialFor(6); //720
```

**Factorial con recursividad**

```js
const factorialRecursividad = (num) => {
if (num === 0) return 1;
return num \* factorialRecursividad(num - 1);
};
factorialRecursividad(6);//720
```

```js
const factorialRecursividad = (num) => {
return num === 0 ? 1 : num \* factorialRecursividad(num - 1);
};
factorialRecursividad(6);//720
```

**Factorial con metodos**

```js
const factorialMetodo = (num) => {
return num < 0
? 1
: new Array(num)
.fill(undefined)
.reduce((product, $, i) => product \* (i + 1), 1);
};
factorialMetodo(6);
```

**Factorial con ciclo while**

```js
const factorialWhile = (num) => {
let result = 1;
let i = 1;
while (i <= num) {
result \*= i;
i++;
}
return result;
};
factorialWhile(6);
```

### Final Identico

```js
const finalIdentico = (cadena, final) => {
  let resultado = cadena.slice(cadena.length - final.length) === final;
  return resultado;
};
```

```js
const finalIdentico = (cadena, final) => {
  return cadena.endsWith(final);
};
```

### Números mayores

**Números mayores con ciclo for**

```js
const numerosMasGrandes = (arr) => {
  const newArry = [];
  for (let i = 0; i < arr.length; i++) {
    let numGrande = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > numGrande) {
        numGrande = arr[i][j];
      }
    }
    newArry.push(numGrande);
  }
  return newArry;
};
```

**Números mayores con metodos**

```js
const numerosMasGrandes = (arr) => {
  return arr.map(function (group) {
    return group.reduce(function (prev, current) {
      return current > prev ? current : prev;
    });
  });
};
```

```js
const numerosMasGrandes = (arr) => {
  return arr.map(Function.apply.bind(Math.max, null));
};
```

### Operaciones Basicas

**Suma**

```js
const suma = (a, b) => {
  return a + b;
};
```

**Resta**

```js
const resta = (a, b) => {
  return a - b;
};
```

**División**

```js
const division = (a, b) => {
  return a / b;
};
```

**Multiplicación**

```js
const multiplicacion = (a, b) => {
  return a * b;
};
```

### Palabra Mas Larga

```js
const palabraMasLarga = (str) => {
  // tu codigo
  const dividir = str.split(" ");
  let palabraLarga = dividir[0];

  for (const palabra of dividir) {
    if (palabra.length >= palabraLarga.length) {
      palabraLarga = palabra;
    }
  }
  respuesta = [];
  respuesta.push(palabraLarga, palabraLarga.length);
  return respuesta;
};
```

### Temperatura

```js
const celciusAFahrenheit = (celcius) => {
  // Tu código va aquí
  let fahrenheit = (celcius * 9) / 5 + 32;
  return Math.floor(fahrenheit);
};
```

```js
const fahrenheitACelcius = (fahrenheit) => {
  // Tu código va aquí
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return Math.ceil(celcius);
};
```

```js
const fahrenheitAKelvin = (fahrenheit) => {
  // Tu código va aquí
  let kelvin = (fahrenheit - 32) * (5 / 9) + 273.15;
  let result = Math.abs(Math.round(kelvin));
  return result;
};
```
