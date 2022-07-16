// Funciones Asincronas -> no dependen de nuestro runtime

function miAsinc() {
    // hace una llamada a una base de datos externa
    // Puede darnos algun error 
}

// Promesas -> sintaxis

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si esta todo correto  
    if (i != 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de manera correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))

