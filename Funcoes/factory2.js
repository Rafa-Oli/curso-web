
function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }

}

console.log(criarProduto('Caneta', 1.50))