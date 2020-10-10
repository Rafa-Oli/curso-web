const sequence = {
    _id: 1,
    get id(){ return this.id++}
}

const produtos = {}

function salvarProduto(produtos){
    if(!produtos.id) produtos.id = sequence.id
    produtos[produtos.id] =produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos} // funções que vão se tornar visiveis para fora do arquivo