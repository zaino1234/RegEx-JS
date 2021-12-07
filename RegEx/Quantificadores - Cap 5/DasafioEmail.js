const email = `
Os e-mails dos convidados são:

fulano.outro@cod3r.com.br
xico@gmail.com
joao.2334_23@gmail.com
filipe_sousa@hotmail.org.com`

console.log(email.match(/\w.+@\w+\.\w+(\.\w+)?/gi)) // grupos ()? podem ser opicionais
