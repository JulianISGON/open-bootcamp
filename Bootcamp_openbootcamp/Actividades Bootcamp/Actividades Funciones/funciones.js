// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// - Una función generadora de índices pares automáticos

function devueleTrue(){
    return true
}
console.log(devueleTrue())

async function resultPromise(){
    return setTimeout(()=>console.log("Hola soy una promesa"),5000)
}

console.log(resultPromise())

function* idsParesAutomaticos(){
    let id = 0
    while(true){
        yield id += 2
    }
}

console.log(idsParesAutomaticos())

const gen = idsParesAutomaticos();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)