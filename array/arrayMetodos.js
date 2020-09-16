const pilotos = ['Vettel', 'Alonso','Raikkonen', 'Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro!
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2,0,'Bottas','Massa')

//remover
pilotos.splice(3,1)


const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2= pilotos.slice(1,4)
console.log(algunsPilotos2)