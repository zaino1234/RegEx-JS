// g - global
// i - ignore case

const texto ='Renato assinou o abaixo-assinado.'
console.log(texto.match(/R|ab/))
console.log(texto.match(/r|ab/i))
console.log(texto.match(/ab|r/gi))