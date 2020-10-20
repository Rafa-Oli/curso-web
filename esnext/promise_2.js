setTimeout(function(){
    console.log('Executando callback')
setTimeout(function(){
    console.log('Executando callback')
setTimeout(function(){
    console.log('Executando callback')}, 2000)}, 2000)}, 2000)

    function esperarPor(tempo = 2000){
        return Promise(function(resolve){
            setTimeout(function(){
                resolve()
            }, tempo)
        })
    }