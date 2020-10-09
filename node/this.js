console.log(this === global) // falso pq o this aponta para o module exports
console.log(this === module) // falso pq o this é um objeto que é a referencia de um module exports


console.log(this === module.exports)
console.log(this === exports)

function logThis() { // this aqui aponta para uma global
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}
 logThis()