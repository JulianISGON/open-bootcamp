//Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["Medellín", "Madrid", "Bogotá", "Barcelona", "Pasto"]

//Ya sabemos recorrer el array para encontrar los valores
array.forEach(valor => { console.log(valor) })

//Podemos modificar el array con .map()
const newArrray = array.map((v, indice) => `${indice + 1} - ${v}`)
console.log(newArrray)

//.filter()

const listaObjetos = [
    {nombre: "Julian", edad: 22},
    {nombre: "Gabriel", edad: 29},
    {nombre: "Juancho", edad: 31},
    {nombre: "Sandra", edad: 49},
    {nombre: "Guillermo", edad: 71},
]
//Forma valida pero no tan optima de filtrar los valores del la lista de objetos
const personasMayores = listaObjetos.filter(obj =>{
    if(obj.edad > 30){
        return true
    }else{
        return false
    }
})

console.log(personasMayores)

//Forma eficiente de filtrar valores de una lista de objetos
const personasMayores2 = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores2)

//Excluir un valor especifico
const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Julian")
console.log(nuevaLista)

//.reduce()

const valores = [3,5,6,7,8,21,16,85,74]

const suma = valores.reduce((acumulado,cur,i, arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma)