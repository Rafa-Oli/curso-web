console.log(module.export === this)
console.log(module.exports === exports)
this.a= 1
exports.b= 2
module.exports.c= 3

exports = nullconsole.log(module.exports)

exports = { // nnão muda o valor que vai exportar
    nome: 'Teste'
    }

 console.log(module.exports)   

 module.exports = {publico: true} // mudança do objeto a ser exportado