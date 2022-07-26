// Declarion de clases
// Creando un objeto tipo persona
class Persona {
    // Metodo constructor
    constructor(nombre, edad, isDeveloper) {

        //.this hace referencia al objeto en el cual se encuentra ahora mismo -> A los valores se les denomina atributos 
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
    // A las funciones dentro de las clases se les denomina como metodos 
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}.`)
    }
}

// como se usa el metodo constructor
const nueva_persona = new Persona("Julian", 22, true)
console.log(nueva_persona)
nueva_persona.saludo()

//Instaciación -> una forma de inicializar una clase
let numero = 60 // Inicializando una variable
console.log(typeof numero)
let persona_2 = new Persona('Maria', 34, false) // Instanciar 
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

//instanceof -> similar a typeof pero para clases nos permite saber si un valor determinado pertenece a un objeto 