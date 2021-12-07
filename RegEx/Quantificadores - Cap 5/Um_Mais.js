const texto1 = `De longe eu avistei o fogo e uma pessoa gritando: FOGOOOO`
const texto2 = `There is as big fog NYC`
const texto3 = `Os números: 0123456789`

//+ -> um ou mais 
const regex = /fogo+/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

const regex2 = /[\d]/g
console.log(texto3.match(regex2))
const regex3 = /[\d]+/g
console.log(texto3.match(regex3))