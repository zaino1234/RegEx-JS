const texto = `
Os e-mails dos convidados são:
    - fulano@code3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - fulano+de+tal@escola.ninja.br
`
console.log(texto.match(/\w.*@\w.*\.\w.*(\.\w)?/gi))
console.log(texto.match(/\S+.*@\S+.*\.\S+.*(\.\S+)?/gi))
console.log(texto.match(/\w{1,100}@\w{1,100}\.\w{1,100}(\.\w{1,100})?/g))
