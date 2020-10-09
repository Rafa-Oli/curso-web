//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) { // funcao anonima
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel: forma reduzida

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito : forma mais reduzida

const subtracao= (a,b) => a-b // se tiver uma unica setença de codigo ja retorna automaticamente o res
console.log(subtracao(2,3))