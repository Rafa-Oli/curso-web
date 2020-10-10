const schedule= require('node-shedule')

const tarefa1 = shedule.scheduleJob('*/5 * 12 ** 2', function (){
    console.log('Executando tarefa 1', new Date().getSeconds)
})

setTimeout(function (){
    tarefa1.cancel()
},20000)

const regra = new shedule.RecurrenceRule()

regra.dayOfWeek = [new shedule.Range(1,5)]
regra.hour = 12
regra.second = 30


const tarefa2 = shedule.scheduleJob('*/5 * 12 ** 2', function (){
    console.log('Executando tarefa 1', new Date().getSeconds)
})