//Comparar Listas
// .every() -> Si todos los componentes de una lista cumplen una condición

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

//Manera 1
// const resultado = array.every((valor =>{
//     if(typeof valor === "number  "){
//         return true
//     }else{
//         return false
//     }
// }))

// console.log(resultado)

//Manera 2 mas optima
const resultado = array.every((valor => typeof valor === "number")) //Para validar que todos son numeros
const resultado2 = array.every((valor => valor > 0))
console.log(resultado)


//Comparaciones de listas

const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))