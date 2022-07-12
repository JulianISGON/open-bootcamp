// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

// - Un nuevo Set con los nombres de tu familia

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)

const nombresFamilia = ["Sandra", "Gabriel", "Jeronimo", "Guillermo", "Julian"]

const miSet = new Set(nombresFamilia)
console.log(miSet)

miSet.add("Julian")
console.log(miSet)

miSet.add("Javascript")
console.log(miSet)