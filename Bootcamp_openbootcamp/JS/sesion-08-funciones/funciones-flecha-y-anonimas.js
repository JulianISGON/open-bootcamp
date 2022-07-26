// Funciones tipo flecha - funciones anonimas

const array = [1, 6, 4, 2, 5, 7, 8, 9]

// con .map en este momento estamos devolviendo el array con el doble de su valor 
const array2 = array.map((valor) => valor * 2)

console.log(array2)


//Definir funciones flechas guardandolas preferiblemente en una constante

const dobleDelValor = valor => {
    return valor * 2
}

// O también

//Creamos la función que nos va a devolver el doble de un valor que lo podamos pasar
const dobleDelValor2 = valor => valor * 2

//Con .map creamos un nuevo array con el doble del valor ya asignado en la funcion flecha anterior
const array3 = array.map(dobleDelValor2)
console.log(array3)