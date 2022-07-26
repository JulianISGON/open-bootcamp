//Iterar los valores de una lista 
const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua y poco eficiente
for(let i = 0; i <= array.length; i++){
    console.log(array[i])    
}

//Forma ES6 mas eficiente .forEach()
array.forEach(valor => {
    console.log(valor)
})

//Sumar un array
let suma = 0;
const arrayNums = [1,2,3,4,5,6,7,8,9,10]

arrayNums.forEach(valor =>{
    suma += valor;
    console.log(valor)
})

console.log(suma)

//Busqueda de un valor dentro de una lista
//Quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if(valor==90){
        return true
    }
})

console.log(variable)


const listaObjetos = [
    {nombre: "Julian", edad: 22},
    {nombre: "Gabriel", edad: 29},
    {nombre: "Juancho", edad: 31},
    {nombre: "Sandra", edad: 49},
    {nombre: "Guillermo", edad: 71},
]

//Encontrar valores en listas de objetos
// const objeto = listaObjetos.find(anios =>{
//     if(anios.nombre == "Juancho"){
//         return true
//     }
// })

//Manera mas eficiente de encontrar valores en listas de objetos
const objeto = listaObjetos.find(annios => annios.nombre === "Juancho")

console.log(objeto)

const objeto2 = listaObjetos.find(nombres => nombres.nombre == "Julian")
console.log(objeto2)