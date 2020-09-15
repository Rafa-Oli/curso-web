//pessoa -> 123 -> {...}
const pessoa= {nome: 'João'}
pessoa.nome='Pedro'
console.log(pessoa)


//pessoa -> 456 -> {..} (Outro endereço)
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome= 'Maria'
console.log(pessoa.nome)