const schedule= require('node-shedule')

const tarefa1 = shedule.scheduleJob('*/5 * 12 ** 2', function (){
    console.log('Executando tarefa 1', new Date().getSeconds)
})

setTimeout(function (){
    tarefa1.cancel()
},20000)