const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR.'

// metadados https://new.safernet.org.br/content/o-que-s%C3%A3o-os-metadados#:~:text=Metadados%2C%20ou%20Metainforma%C3%A7%C3%A3o%2C%20s%C3%A3o%20dados%20sobre%20outros%20dados.&text=Assim%20Metadados%20s%C3%A3o%20informa%C3%A7%C3%B5es%20que,linguagem%20intelig%C3%ADvel%20para%20um%20computador.

const regex = /casa/gi
console.log(texto.match(regex))
console.log(texto.match(/a|a b/))