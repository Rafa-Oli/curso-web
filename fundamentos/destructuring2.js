function rand({ min = 0, max = 1000 }) { // esta passando um objeto para essa funcao, facilitando a extração direta dos atributos
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({}))
console.log(rand({ min: 955 }))
