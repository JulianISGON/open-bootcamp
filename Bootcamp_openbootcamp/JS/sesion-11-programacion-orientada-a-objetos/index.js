const persona = {
    nombre: "Julian",
    edad: 22,
    isDeveloper: true,
    saludo: function () {
        console.log("Hola")
    }
}

console.log(persona)

// Creando otro objeto persona
const otra_persona = {
    nombre: "Sergio",
    edad: 23,
    isDeveloper: true,
    saludo: function () {
        console.log('Hola')
    }
}

console.log(otra_persona)

//funcion para crear persona -> Factory function

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log("Hello")
        }
    }
}

// Creando persona con la funcion

const nueva_persona = creaPersona("Gabriel", 28, false)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Juan Esteban", 31, false)
console.log(nueva_persona2)
