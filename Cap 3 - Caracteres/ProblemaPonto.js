const texto = 'Bom\tdia'
const texto1 = 'Bom\ndia'
console.log(texto.match(/./gi))
console.log(texto.match(/..../g)) // O PONTO NÃO ENGLOBA O \n
console.log(texto1.match(/..../g)) // O PONTO NÃO ENGLOBA O \n

// dotall - algumas linguagens tem um flag/exp/s, mas JS não!
