const telefone = `
Lista telefônica:
    -(11) 98756-1212
    -987654321
    -98888-9999
    -(61) 9950235089`

console.log(telefone.match(/(\(\d{2}\)\s?)?\d{4,5}-?\d{4}/g))