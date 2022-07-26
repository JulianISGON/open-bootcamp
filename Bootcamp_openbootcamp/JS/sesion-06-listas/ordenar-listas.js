//Ordenar Arrays
//.sort()

const array = [2, 5, 4, 9, 7, 6, 1, 5, 14, 23]
console.log(array)

//Manera 1 de ordenar 
array.sort((a, b) => {
    if (a < b) {
        return -1
    } else if (a > b) {
        return +1
    } else {
        return 0
    }
})

console.log(array)

//Manera 2 de ordenar un poco mas optima
//Solo numericos

const arrayNumerico = [98, 85, 74, 63, 52, 41, 36, 25, 14]

arrayNumerico.sort((a, b) => a - b)

console.log(arrayNumerico)

//Interesante en arrays de objetos
const listaObjetos = [
    {nombre: "Sandra", edad: 49},
    {nombre: "Gabriel", edad: 29},
    {nombre: "Guillermo", edad: 71},
    {nombre: "Julian", edad: 22},
    {nombre: "Juancho", edad: 31},
]
 //Manera 1
// listaObjetos.sort((a,b)=>{
//     if(a.edad < b.edad){
//         return -1
//     }else if(a.edad > b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })

// console.log(listaObjetos)


//Manera 2
listaObjetos.sort((a,b)=> b.edad - a.edad)

console.log(listaObjetos)