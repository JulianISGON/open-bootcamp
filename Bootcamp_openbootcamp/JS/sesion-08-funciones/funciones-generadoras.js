// Funciones generadoras
function* generaID() {
    let id = 0;
    while (true) {
        id++
        if (id === 10){
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaID();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)