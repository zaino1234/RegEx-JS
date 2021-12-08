const texto1 = `dia diatonico diafragma media wikipedia bom_dia melodia radial`

console.log(texto1.match(/\bdia\w+/gi)) // elemento selecionado no inicio
console.log(texto1.match(/\w+dia\b/gi)) // elemento selecionado no Fim
console.log(texto1.match(/\w+dia\w+/gi)) 
console.log(texto1.match)