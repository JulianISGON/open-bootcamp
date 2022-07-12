// .some()
// Cuando queremos que por lo menos un elemento cumpla una condición a diferencia del every que es que todo el arreglo cumpla una condicicón

const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < 0)
console.log(res)

const existe = array.some(valor => valor == 91)
console.log(existe) 

//Lista de objetos

const listaObjetos = [
    {nombre: "Julian", edad: 22},
    {nombre: "Gabriel", edad: 29},
    {nombre: "Juancho", edad: 31},
    {nombre: "Sandra", edad: 49},
    {nombre: "Guillermo", edad: 71},
]

const existePersona = listaObjetos.some(persona => persona.nombre === "Julian" && persona.edad === 22)
console.log(existePersona)

//Obtener una lista a partir de un objeto iterable 
const str = "Hola soy Julián"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

