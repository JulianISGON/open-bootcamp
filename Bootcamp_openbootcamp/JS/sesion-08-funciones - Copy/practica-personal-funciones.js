//Práctica personal de declaración de variables entendiendo que el parametro se puede apropiar de la variable persona para ser declarada
//Ejemplo persona.nombre
let persona = { nombre: "Juan", apellido: "González" }
console.log(persona)

saludarPersona(persona)

console.log(persona)

function saludarPersona() {
    console.log(`Hola ${persona.nombre} ${persona.apellido}`)
}

//Ejemplo person.nombre -> person es el parametro que se le ha asignado
let persona2 = { nombre: "Julian", apellido: "Isaza" }
console.log(persona2)

saludarPersona2(persona2)

console.log(persona2)

function saludarPersona2(person) {
    console.log(`Hola ${person.nombre} ${person.apellido}`)
}

// Clasica vs Flecha
// Clasica con parametro
// 1 - Devolviendo nombres
function saludar(nombre, apellido) {
    return "Hola" + " " + nombre + " " + apellido
}

console.log(saludar("Julian", "Isaza"))

// 2 - Sumando
function suma(a,b){
    return a+b
}

console.log(suma(12,15))

// Clasica sin parametro
// 1- Devolviendo nombre
let persona3 = { nombre: "Guillermo", apellido: "Isaza" }

function saludarPersona3() {
    console.log(`Hola ${persona3.nombre} ${persona3.apellido}`)
}

saludarPersona3()

// 2 suma
let a = 10
let b = 10
function suma2(){
    return a+b
}

console.log(suma2(20,20))

// Funciones anonimas -> no es necesaria la palabra resevada function 
// Con parametro 1- Saludo
const saludo = (nombre) =>{
    return `Saludos ${nombre}`
}

console.log(saludo("Alberto"))

//Saludo nombre compuesto

let nombreCompleto = {nombre:"Juan Esteban", apellido: "Garcia"}

const saludarNombreCompleto = () =>{
    return "Hola" + " " + nombreCompleto.nombre + " " + nombreCompleto.apellido
}

console.log(saludarNombreCompleto())

// Suma
const sumando = (c,d) => {
    return c+d
}

console.log(sumando(10,20))

// Devolviendo un string con funcion flecha

let str = "Mi nombre es Julian y me gusta aprender Javascript"

const frase = () =>{
    return str
}

console.log(frase())


