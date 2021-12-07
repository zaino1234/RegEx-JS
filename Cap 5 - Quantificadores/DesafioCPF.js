const cpf = `
CPF dos aprovados: 
-600.567.890-12
-765.998.345-23
-032803251-16
-709.667251-68`

console.log(cpf.match(/\d{3}\.?\d{3}\.?\d{3}\.?-?\d{2}/g))
