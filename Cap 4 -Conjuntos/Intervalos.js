const texto = `1,2,3,4,5,6,a.b c!?e[f`

console.log(texto.match(/[a-z]/g))
console.log(texto.match(/[c-z]/g))
console.log(texto.match(/[1-9]/g))
console.log(texto.match(/[A-Z1-3]/gi))