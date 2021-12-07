const telefone = ` 
Lista Telefonoica: 
-(11) 98756-1212
-98765-4321
-(83) 8888-9999
-(61) 95023-5089`

console.log(telefone.match(/\(?\d{0,2}?\)?\s?\d{4,5}-?\d{4}/g))
