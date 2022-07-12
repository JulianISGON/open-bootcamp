// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const datosPersonales = {
    nombre: "Julian",
    apellido: "Isaza",
    edad: 22,
    altura: 181,
    eresDesarrollador: true
}

let edad = datosPersonales.edad
console.log(edad)

const datosAmigos = [{
    ...datosPersonales
},{
    nombre: "Sergio",
    apellido: "Ochoa",
    edad: 23,
    altura: 186,
    eresDesarrollador: true
},{
    nombre: "Adrián",
    apellido: "Marín",
    edad: 29,
    altura: 182,
    eresDesarrollador: true
}]

const ordenadosPorEdad = datosAmigos.sort((a,b)=> b.edad - a.edad)
console.log(ordenadosPorEdad)