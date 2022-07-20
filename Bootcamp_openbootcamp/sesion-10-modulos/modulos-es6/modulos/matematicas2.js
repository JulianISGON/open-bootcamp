export function suma(a, b) {
    return a + b
}

export function multiplica(a, b) {
    return a * b
}

export function eleva(a, b) {
    return a ** b
}

export function resta(a, b){
    return a - b
}

export function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

export const nombre = "matematicas"

// Así se exportan archivos con common js, no es la manera mas actualizada de exportar archivos
// module.exports = {
//     suma,
//     multiplica,
//     eleva,
//     factorial,
//     resta
// }