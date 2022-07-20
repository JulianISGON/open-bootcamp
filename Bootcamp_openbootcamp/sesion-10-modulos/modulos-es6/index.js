//import {suma, eleva, resta, nombre} from './modulos/matematicas2.js'

//Para exportar todos los archivos se haría de la siguiente manera
import * as moduloMatematicas from "./modulos/matematicas2.js"
import getAutor, { annio } from "./modulos/literatura.js"

const sum = moduloMatematicas.suma(4,12)
console.log(sum)

const potencia = moduloMatematicas.eleva(2,10)
console.log(potencia)

const res = moduloMatematicas.resta(100,85)
console.log(res)

console.log(moduloMatematicas.nombre)

console.log(getAutor())
console.log(annio)