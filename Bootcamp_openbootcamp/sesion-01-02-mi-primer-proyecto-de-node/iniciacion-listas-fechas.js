//Listas, array o arreglo
const lista = [1, "Hola", null, true, undefined];
const lista2 = new Array(2, "Adiós", false)

console.log(lista)
console.log(lista2)


//Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "huawei",
    color: "blue",
    contactos: ["Gabriel", "Sandra","Juancho"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}

movil.annio = 2019


// Fechas
// Librerias de apoyo Moment.js
const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10)
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 1, 5)
console.log(fecha_valores)

const dia = ahora.getDay();
const mes = ahora.getMonth() + 1;
const annio = ahora.getFullYear()