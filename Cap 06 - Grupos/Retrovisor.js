const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
console.log(texto1.match(/<(\w+)>.*<\/\1>/g))

// Retrovisores --> elementos capturados(salvos na memoria do PC) e numerados \1\2\3...
const texto2 = `Lentamente é mente muito lenta.`
console.log(texto2.match(/(lenta)(mente).*\2*\1\./gi))

// (?: xxxx) Grupo não caputra o valor 
console.log(texto2.match(/(?:lenta)(mente).*\1/gi))

// '$2'--->Subistiui o retrovisor selecionado         texto.replace(/(lenta)(mente)/gi, '$2')
console.log(texto2.replace(/(lenta)(mente)/gi, 'ABC$2ABC' ))