//FABRICA DE IDEIAS - REGEX 01

// Exercício 01 - CPF 

const cpf = `Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), pórem, para confirmar o número de seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.`

console.log(cpf.match(/\d{3}\.?\d{3}\.?\d{3}\.?-?\d{2}/g))

// Exercício 02 - CPF e HORA

const cpf_hora = `O sistema vai parar para uma manutenção programa no dia 10/09/2020 às 23:00`

console.log(cpf_hora.match(/(\d{2}\/\d{2}\/\d{4})|(\d{2}:\d{2})/g))

// Exercício 03 - HREF 

const href = `
<html>
    <head><title>Exercício</head></title>
    <dody>
        <p>Menu</p>
        <ul>
            <li><a href="https://google.com">Google</a></li>
        <ul>
</html>`

console.log(href.match(/(?<=href=").*(?=")/g))

// Exercícios 04 - TAG H1

const tag_h1 = `
<html>
  <head><title>Exercícios</title></head>
  <body>
    <h1>Exercícios</h1>
    <table>
      <thead>
        <th>#</th>
        <th>Questão</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Primeiro exercício de regex</td>
        </tr>
      </tbody>
    </table>
</html>`

console.log(tag_h1.match(/(?<=<h1>).*(?=<\/h1>)/g))
