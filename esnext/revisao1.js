//operador rest 
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2,3,4,5))


//EC8: Object.values/Object.entries
const obj = {a: 1,b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))


//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente'
    }
}
console.log(pessoa.nome,pessoa.ola())

//class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'AU AU'
    }
}

console.log(new Cachorro().falar())
