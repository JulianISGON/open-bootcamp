// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let array = ["Computador", "mouse", "teclado", "monitor", "Cpu"]
console.log(array)
array.push("Aceite de Girasol")
console.log(array)
array.pop("Aceite de Girasol")
console.log(array)

const peliculas = [
    { titulo: "Avengers", director: "Joe Russo", fecha: new Date(2009, 02, 02) },
    { titulo: "Spiderman", director: "Jon Watts", fecha: new Date(2022, 02, 02) },
    { titulo: "Thor", director: "Taika Waititi", fecha: new Date(2020, 02, 02) }
]

const peliculaMasActual = peliculas.filter(p => p.fecha > new Date(2010, 01, 01))

console.log(peliculaMasActual)

const directores = peliculas.map(p => p.director)
console.log(directores)

const titulosDePeliculas = peliculas.map(p => p.titulo)
console.log(titulosDePeliculas)

const nuevalista = directores.concat(titulosDePeliculas)
console.log(nuevalista);

const nuevaLista2 = [...directores, ...titulosDePeliculas]
console.log(nuevaLista2)
