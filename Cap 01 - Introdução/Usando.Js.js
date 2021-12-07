const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

// Verificar (test) se o texto tem texto
// Encontra (exec) o RegExp selecionado e informa a sua posição (indice)
const regex9 = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regex9.test(texto))
console.log(regex9.exec(texto))

// Achar o a string selecionada / search primeiro elemento (indice)
const regexLETRAS = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLETRAS))
console.log(texto.search(regexLETRAS))
console.log(texto.replace(regexLETRAS, 'Achei'))
console.log(texto.split(regexLETRAS))