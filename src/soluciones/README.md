## Recuerda intentarlo antes de venir a ver las respuestas.

### Índice.

- [Factorial](#factorial)
- [Operaciones Basicas](#operaciones-basicas)
- [Palabra Mas Larga](#palabra-mas-larga)

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
