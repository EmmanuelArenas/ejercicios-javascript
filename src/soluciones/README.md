## Recuerda intentarlo antes de venir a ver las respuestas.

### Índice.

- [Cambio Signo](#cambio-signo)
- [Elimina Repetidos](#elimina-repetidos)
- [Factorial](#factorial)
- [Final Identico](#final-identico)
- [Letra Faltante](#letra-faltante)
- [Mayor de un array](#mayor-de-un-array)
- [Mínimo Común Múltiplo](#mínimo-común-múltiplo)
- [Número Caracteres](#número-caracteres)
- [Números Mayores](#números-mayores)
- [Operaciones Basicas](#operaciones-basicas)
- [Palabra Mas Larga](#palabra-mas-larga)
- [Palíndromo](#palíndromo)
- [Secuencia de Caracteres](#secuencia-de-caracteres)
- [Suma Primos](#suma-primos)
- [Suma un par del array](#suma-un-par-del-array)
- [Temperatura](#temperatura)
- [Título](#título)

### Cambio Signo

```js
const cambioSigno = (num) => {
  return num > 0 ? num * -1 : num * -1;
};
```

### Elimina Repetidos

**Metodo Set**

```js
const arr = [1, 3, 1, "hola", "hola", true, false, false, true];

const eliminaRepetidos = (arr) => {
  return [...new Set(arr)];
};

eliminaRepetidos(arr); //[ 1, 3, 'hola', true, false ]
```

**Metodo filter**

```js
const arr = [1, 3, 1, "hola", "hola", true, false, false, true];

const eliminaRepetidos = (arr) => {
  return (resultadoFilter = arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  }));
};

eliminaRepetidos(arr); //[ 1, 3, 'hola', true, false ]
```

**Metodo reduce**

```js
const arr = [1, 3, 1, "hola", "hola", true, false, false, true];

const eliminaRepetidos = (arr) => {
  let resultReduce = arr.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
  return resultReduce;
};
eliminaRepetidos(arr); //[ 1, 3, 'hola', true, false ]
```

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

### Número Caracteres

```js
const numCaracteres = (str) => {
  if (str) {
    return str.length;
  }
};
numCaracteres("Hola Mundo"); //10
```

### Letra Faltante

```js
const letraFaltante = (str) => {
  let codigoAt = str.charCodeAt(0);
  let result = "Completa";

  str.split("").forEach((e) => {
    e.charCodeAt(0) === codigoAt
      ? codigoAt++
      : (result = String.fromCharCode(codigoAt));
  });

  return result;
};
```

### Mayor de un array

```js
const mayorDeUnArray = (arr) => {
  let num_mayor = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    num > num_mayor ? (num_mayor = num) : 0;
  }
  return num_mayor;
};
```

### Mínimo Común Múltiplo

```js
const minimoComunMultiplo = (arr) => {
  const [min, max] = arr.sort((a, b) => a - b);
  const rango = Array(max - min + 1)
    .fill(0)
    .map(($, i) => i + min);
  const upperBound = rango.reduce((prod, curr) => prod * curr);
  if (min <= 0 || max <= 0) {
    return 0;
  } else {
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      const divisible = rango.every((value) => multiple % value === 0);
      if (divisible) {
        return multiple;
      }
    }
  }
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

### Palíndromo

```js
const palindromo = (str) => {
  let regex = /[^a-zA-Z0-9]/g;
  let clean = str.replace(regex, "");
  let reverse = clean.split("").reverse().join("");
  return clean.toLowerCase() === reverse.toLowerCase() ? true : false;
};
```

### Secuencia de caracteres

```js
function secuencia(cadena) {
  const apertura = "([{";
  const cierre = ")]}";
  const comparador = { ")": "(", "]": "[", "}": "{" };
  const pila = [];

  for (const caracter of cadena) {
    if (apertura.includes(caracter)) {
      pila.push(caracter);
    } else if (cierre.includes(caracter)) {
      if (pila.length == 0) {
        return false;
      }
      if (pila[pila.length - 1] === comparador[caracter]) {
        pila.pop();
      } else {
        return false;
      }
    }
  }

  return pila.length === 0;
}
```

### Suma Primos

```js
const sumaPrimos = (num) => {
  let numPrimos = [];
  for (let i = 2; i <= num; i++) {
    numPrimos.every((e) => i % e !== 0) ? numPrimos.push(i) : 0;
  }
  return numPrimos.reduce((sum, e) => sum + e, 0);
};
```

### Suma un par del array

```js
const sumArray = (array, num) => {
  let arr = [];
  for (i = 0; i < array.length; i++) {
    array.map((e) => {
      array[i] + e === num && array[i] !== e ? arr.push(array[i]) : 0;
    });
  }
  return num === 0
    ? [0, 0]
    : num === 2
    ? [1, 1]
    : arr.length === 0
    ? false
    : [...new Set(arr)];
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

### Título

**Con ciclo for**

```js
function titulo(str) {
  let strSplit = str.split(" ");
  let newStr = [];
  for (let i = 0; i < strSplit.length; i++) {
    newStr[i] =
      strSplit[i][0].toUpperCase() + strSplit[i].slice(1).toLowerCase();
  }
  return newStr.join(" ");
}
```

**Con ciclo for in**

```js
function titulo(str) {
  let strSplit = str.split(" ");
  let newStr = [];
  for (let i in strSplit) {
    newStr[i] =
      strSplit[i][0].toUpperCase() + strSplit[i].slice(1).toLowerCase();
  }
  return newStr.join(" ");
}
```

**Con Métodos**

```js
function titulo(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
```
