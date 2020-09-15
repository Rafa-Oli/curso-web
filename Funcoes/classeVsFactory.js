//instancia a partir de classe
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

//instancia a partir de factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)// vantagem= não precisa do "this"
    }
}

const p2 = criarPessoa('João')
p2.falar()