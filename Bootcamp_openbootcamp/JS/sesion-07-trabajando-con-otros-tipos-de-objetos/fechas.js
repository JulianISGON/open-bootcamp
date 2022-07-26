// Trabajando con fechas
// Se definen así:

// new Date nos representará la fecha actual en la cual se imprime por consola
const fecha = new Date()
console.log(fecha)

// También podemos establecer una fecha fija
// Recuerda que los meses inicializan desde 0 -> 0-enero 11-diciembre
const fechaFija = new Date(2020,7,11) 
console.log(fechaFija)

//Podemos declarar fechas a partir de strings
const fechaString = new Date ("August 11, 2020")
console.log(fechaString)

//Comparar fechas -> una fecha es posterior a otra
console.log(fecha < fechaString)

//Para comparar fechas se deben convertir en milisegundos
console.log(fechaFija.getTime() === fechaString.getTime()) // Podemos validar que las fechas son las mismas


//Obtener el día, el mes y el año
// Obtener el día .getDate()
console.log(fechaString.getDate())

// Obtener el mes .getMonth() le ponemos el "+" para que nos de el mes exacto
console.log(fechaString.getMonth()+1)

// Obtener el año .getFullYear()
console.log(fechaString.getFullYear())


// .toLocaleDateString()
console.log(fechaString.toLocaleDateString('en-US'))