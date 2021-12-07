const texto = `
ca	r
r	o s!
`
console.log(texto.match(/\s/g)) // \n e \s juntos tab + espaços em branco.
console.log(texto.match(/\t/g))
console.log(texto.match(/ca/g))
console.log(texto.match(/ca\t/))

// todos os espaços e tab
console.log(texto.match(/\nca\tr\nr\to\ss!\n/g))