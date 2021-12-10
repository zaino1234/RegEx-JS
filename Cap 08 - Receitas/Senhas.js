 const texto = `
 123456
 cod3r
 QUASE123*
 QUASE
 $O$p1
 essaSenhaEGgrande123
 
 #OpA1
 Foi123!`

 console.log(texto.match(/^.{6,20}$/gm)) // Delimita a quantidade termos que vão aparecer
 console.log(texto.match(/^.*[A-Z]$/gm)) // Indica que os elementos da linha deve ser LETRAS MAÚCULAS.
 console.log(texto.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%¨&*]).{6,20}$/gm))