function rand([min= 0, max= 1000]){
    if(min > max) [min,max]= [max,min] //criacao de um novo array com dois atributos que o desestruturou
const valor= Math.random() * (max-min) + min
return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))