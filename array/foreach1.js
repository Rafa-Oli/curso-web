const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
//primeira forma
aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1})${nome}`)
})
//segunda forma
aprovados.forEach(nome => console.log(nome))
// terceira forma
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)