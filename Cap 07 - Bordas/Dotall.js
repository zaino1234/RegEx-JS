const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi)) 
console.log(texto.match(/^R/gi)) //---(^XXX) INICIO de linha/string----OU console.log(texto.match(/^./gi))
console.log(texto.match(/r$/gi)) //---(XXXX$)FIM de linha/string----OU console.log(texto.match(/^./gi))

console.log(texto.match(/^r.*r$/gi))