//Sets o conjuntos

const array = [1, 2, 3, 4, 5]

const miSet = new Set(array)
console.log(miSet)
console.log(array)

// .add()

miSet.add(9)
console.log(miSet)

// .delete()
miSet.delete(9)
miSet.delete(5)
console.log(miSet)

// .clear() Limpia el set
// miSet.clear()
// console.log(miSet)

// .has() propiedad
console.log(miSet.has(4))

// .size
console.log(miSet.size)

miSet.forEach(valor =>{
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)