//principal diferença do Map para o Objeto é a possibilidade de ter chaves de diveros tipos
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch,vl)
})

console.log(chavesVariadas.has(123))//verifica se esta presente
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))

chavesVariadas.set(456, 'b')