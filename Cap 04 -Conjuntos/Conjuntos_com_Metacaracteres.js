const texto = `$.+*?-`

console.log(texto.match(/[-.$+*?]/g)) // NÃO precisa de / ESCAPE dentro de CONJUNTOS
console.log(texto.match(/[$-?]/g)) // Isso é o intervalo - RANGE 

// Casos onde - não é RANGE
console.log(texto.match(/[$\-?]/g)) 
console.log(texto.match(/[-?]/g))

// pode precisar de / escape dentro do conjutno: - [] ^ 
