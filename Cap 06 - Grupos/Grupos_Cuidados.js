const texto = `Pedrinho (filho do Pedro Silva) é doutor do ABCabc AbC`

console.log(texto.match(/[(abc)]/gi)) // ISSO NÃO É UM GRUPO [ () ]
console.log(texto.match(/([abc])/gi)) //ISSO É UM GRUPO ( [ ] )
console.log(texto.match(/(abc)+/gi))
