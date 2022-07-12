// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

let fechaHoy = new Date()
console.log(fechaHoy)

let fechaNacimiento = new Date(1999,9,20)
console.log(fechaNacimiento)

let comparacionFechas = fechaHoy > fechaNacimiento
console.log(comparacionFechas)

let mesDeNacimiento = fechaNacimiento.getMonth() + 1
console.log(mesDeNacimiento)

let annioDeNacimiento = fechaNacimiento.getFullYear()
console.log(annioDeNacimiento)