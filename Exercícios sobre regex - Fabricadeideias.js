// Exercício 01 - CPF

const texto01 = `Maria foi ao Na Hora e recebeu seu novo CPF (772.843.809-34), pórem, para confirmar o número de seu novo documento, foi pedido que na hora de digitar no sistema, que digitasse sem a pontuação, então ela digitou 77284380934.`

console.log(texto01.match(/\d{3}\.?\d{3}\.?\d{3}-?\d{2}/g))

// Exercício 03 - HREF

const texto02 = `
<html>
    <head><title>Exercício</head></title>
    <dody>
        <p>Menu</p>
        <ul>
            <li><a href="https://google.com">Google</a></li>
        <ul>
</html>`

console.log(texto02.match(/href="(.*)"/g))

// Exercício 03 - CPF e HORA 

const texto03 = `O sistema vai parar para uma manutenção programa no dia 10/09/2020 às 23:00`

console.log(texto03.match(/\d{2}\/\d{2}\/\d{4}|\d{2}:\d{2}/g))

// Exercícios 04 - TAG H1
const texto4 = `<html>
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

console.log(texto4.match(/<h1>(.*?)<\/h1>/)[1]) 