//transformando um objeto em JSON
const obj= { a: 1, b:2, c: 3, soma(){return a+ b+ c}}
console.log(JSON.stringify(obj))

//transformando um JSON em objeto
console.log(JSON.parse('{"a": 1", "b" : 2, "c" : 3}'))