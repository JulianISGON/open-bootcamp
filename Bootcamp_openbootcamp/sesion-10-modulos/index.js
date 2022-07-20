//Un modulo es un fragmento de codigo que puedes ser utilizado en varias partes de nuestro programa

function suma(a,b){
    return a + b
}

function multiplica(a,b){
    return a * b
}

function eleva(a,b){
    a ** b
}

function factorial(a){
    let factorial = 1
    for(let i = 1; i <= a; i++){
        factorial *= i
    }
    return factorial
}

const fact = factorial(5)
console.log(fact)

const sum = suma(12,90)
console.log(sum)