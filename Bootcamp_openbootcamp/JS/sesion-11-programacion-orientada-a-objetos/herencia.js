// Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad, isDeveloper) {
        this._nombre = nombre
        this._edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }

}

// Para aplicar la herencia debemos utilizar la palabra clave 'extendes' -> en este momento estamos creando una clase a partir de persona 
class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        // Para usar los atributos debemos llamar al constructor de la clase superior con la palabra 'super'
        super(nombre, edad)
        this.lenguaje = lenguaje
    }
    saludo() { // Override -> Sobreescribir valores
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevoDev = new Desarrollador('Sergio', 23, 'Javascript')
console.log(nuevoDev)
nuevoDev.saludo()

// Polimorfismo -> Varias formas