// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js")
// const factorial = moduloMatematicas.factorial;
// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)

const { factorial, suma, eleva,resta } = require("./modulos-importaciones-exportaciones/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

const ele = eleva(5, 10)
console.log(ele)

const res = resta(10,8)
console.log(res)

// console.log(module)