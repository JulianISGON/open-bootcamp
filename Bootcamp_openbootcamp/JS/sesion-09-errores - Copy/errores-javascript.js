// Errores

const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //return false
    throw new Error("El valor debe ser de tipo numero")
}

//const elDoble = miFuncion("ala")
const numero = "8"

try {
    // Codigo que puede fallar 
    console.log("Esta ejecutandose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
    
    //Lo que hace el parametro de catch es capturar la info que hemos pasado a throw new error
} catch (e) {
    // En caso de que falle ejecutame esto que esta entre las llaves 
    console.error(`El valor de e es: ${e}`)
    console.error("Error")
} finally{
    console.log("Esto se ejecutara si existe algun error y tambien si no existe alguno")
}


//Tipos de errores
//Internal error, Syntax error, TypeError, RangeError y referenceError
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error