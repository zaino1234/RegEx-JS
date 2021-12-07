const texto = `ABC [abc] a-c 1234`

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não está definido um range []

console.log(texto.match(/[A-z]/g)) 
// os intervalos no REGEX usam a tabela UNICODE/ASCII como referência A,B,C...[];@# a,b,c....

//A ORDEM DOS CONJUTOS DEVE ESTÁ DE ACORDO COM A TABELA UNICOD 
//console.log(texto.match(/[a-Z]/g))
//console.log(texto.match(/[5-1]/g))
