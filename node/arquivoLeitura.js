const fs = require('fs') // fs= modulo previamente instalado no node

const caminho = __dirname+ '/arquivo.json'

// Leitura sincrona ...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Leitura assincrona ...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

// outra maneira mais facil de ler
const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err,arquivos) => {
    console.log('Conteúdo da pasta ...')
    console.log(arquivos)
})