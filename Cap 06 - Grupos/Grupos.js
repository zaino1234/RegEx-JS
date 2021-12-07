const texto1 = `O Jóse Simão é muito engraçado.... hehehehehe`
console.log(texto1.match(/(he)+/g))

const texto2 = `http://www.site.info www.escola.ninja.br google.com.ag`
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w+(\.\w+)?/g))