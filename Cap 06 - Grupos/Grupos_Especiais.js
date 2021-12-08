const texto = `João é calmo, mas no transito fica nervoso.`

console.log(texto.match(/[\wÀ-ú]+/g))

//Positivo LOOKAHEAD <<<====
console.log(texto.match(/[\wÀ-ú]+(?=,)/g)) // palvavras que tem o elemento selecionado na frente (?=)
console.log(texto.match(/[\wÀ-ù]+(?=\.)/g))
console.log(texto.match(/[\[\wÀ-ú]+(?=\, mas)/g))

//Negativo LOOKAHEAD ===>>> // palavras que não tem o elemento selecionado atrás (?!) 
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s\.](?!,)/g))