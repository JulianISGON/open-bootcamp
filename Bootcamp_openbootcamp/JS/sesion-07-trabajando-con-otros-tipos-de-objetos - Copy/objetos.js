//Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Julian",
    apellido: "Isaza",
    isDeveloper: true,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj["4-juegos"])

//Acceder a propiedades a través de variables
const prop = "nombre"
console.log(obj[prop])

//Cuando igualamos los objetos, se cambia la información en general de ambos, se va al mismo lugar en la memoria

const obj2 = obj
obj.nombre= "Gabriel"
console.log(obj2)
console.log(obj)

//Pero no pasa igual con los valores primitivos

let nombre1 = "Julián"
let nombre2 = nombre1

nombre2 = "Gabriel"
console.log(nombre1)
console.log(nombre2)

//Duplicar objeto 

const obj3 = {...obj} //Spread Operator
console.log(obj.nombre)
console.log(obj3.nombre)

obj3.nombre = "Guillermo"
console.log(obj3.nombre)
console.log(obj.nombre)

// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939},
    { titulo: "Titanic", anyo: 1997},
    { titulo: "Moana", anyo: 2016},
    { titulo: "El efecto mariposa", anyo: 2004},
    { titulo: "TED", anyo: 2012}
]

console.log(listaPeliculas)

// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b)=> b.anyo - a.anyo)
console.log(listaPeliculas)

