const texto = `a   b`
console.log(texto.match(/a\s\s\sb/g))
console.log(texto.match(/a   b/g))

console.log(texto.match(/a\s+b/g))
console.log(texto.match(/a {3}b/g))
console.log(texto.match(/a\s{3}b/g))


const texto1 = `a


b`

console.log(texto1.match(/a\n\n\nb/g))