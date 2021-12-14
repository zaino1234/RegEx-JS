// Primeira Parte

const urls = `
Lista de URLs:

https://g1.globo.com/

https://g1.globo.com/fato-ou-fake/

https://g1.globo.com/especiais/guia-de-compras/noticia/2021/12/14/presentes-de-ate-r-150-para-pets.ghtml

https://g1.globo.com/bemestar/blog/longevidade-modo-de-usar/post/2021/12/14/idosos-tambem-merecem-presentes-especiais.ghtml

https://g1.globo.com/ce/ceara/noticia/2021/12/14/avine-vinny-do-hit-coracao-cachorro-e-mantido-preso-e-passa-noite-em-delegacia.ghtml

https://g1.globo.com/economia/noticia/2021/12/14/falta-de-vidro-complica-entregas-de-cerveja-long-neck-e-preocupa-os-bares-na-chegada-do-verao.ghtml

https://g1.globo.com/sp/sao-paulo/noticia/2021/12/14/verticalizacao-desigual-em-sp-brancos-moram-mais-em-predios-de-regioes-estruturadas-e-negros-em-casas-de-bairros-perifericos.ghtml
`
// Para URLs tipo: https://g1.globo.com/

console.log(urls.match(/https:\/\/\w+\.\w+\.\w+\/(?=[^\w])/g))

// Para URLs tipo: https://g1.globo.com/fato-ou-fake/

console.log(urls.match(/https:\/\/\w+\.\w+\.\w+\/[ -z]+?\/(?=[^\w])/g))

// Para URLs tipo: https://xx.xxx.xx/xxxxxx/xx-xx-xxxx/xxxxx/2021/12/14/xxxxx-xxx-xxx-xx-150-xxxx-xxx.xxxx

console.log(urls.match(/https:\/\/\w+\.\w+\.\w+\/[ -z]+?\/\w+\/\d{4}\/\d{2}\/\d{2}\/[ -z]+\/?/g))


//Segunda Parte

//Título
const h1 = `<h1 class="content-head__title" itemprop="headline">Idosos também merecem presentes especiais</h1> </div> <div class="medium-centered subtitle"> <meta itemprop="alternateName" content="Jogos, produtos voltados para o bem-estar e até animais de pelúcia podem ser opções estimulantes e prazerosas"> <h2 class="content-head__subtitle" itemprop="alternativeHeadline">Jogos, produtos voltados para o bem-estar e até animais de pelúcia podem ser opções estimulantes e prazerosas</h2>
<h1 class="content-head__title" itemprop="headline">QUALQUER COISA PARA TESTAR</h1> </div> <div class="medium-centered subtitle"> <meta itemprop="alternateName" content="Jogos, produtos voltados para o bem-estar e até animais de pelúcia podem ser opções estimulantes e prazerosas"> <h2 class="content-head__subtitle" itemprop="alternativeHeadline">Jogos, produtos voltados para o bem-estar e até animais de pelúcia podem ser opções estimulantes e prazerosas</h2>`

console.log(h1.match(/(?<=<.*>).*?(?=<\/h1)/g)[0])

// Data de Publicação
const data = `<span style="font-weight: var(--font-weight-regular)">Rio de Janeiro</span> </p> <p class="content-publication-data__updated"> <time itemprop="datePublished" datetime="2021-12-14T09:00:33.763Z"> 14/12/2021 06h00 </time> <span class="content-publication-data__updated-relative"> <time itemprop="dateModified" datetime="2021-12-14T09:00:34.170Z"> Atualizado <amp-timeago layout="fixed" width="160" height="20" datetime="2021-12-14T09:00:34.170Z" locale="ptBR" class="content-publication-data__amp-timeago i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-built i-amphtml-layout" i-amphtml-layout="fixed" role="text" style="width: 160px; height: 20px;"><time datetime="2021-12-14T09:00:34.170Z">há 4 horas</time></amp-timeago> </time> </span>`

console.log(data.match(/\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}/g)[1])

// Texto da notícia
const texto = `
<p class="content-text__container theme-color-primary-first-letter" data-track-category="Link no Texto" data-track-links=""> Na reta final para as compras de Natal, a maioria das pessoas dedicou tempo e energia para achar um presente que coubesse no orçamento e fizesse a alegria das crianças da casa. Mas, e os idosos da família? Não me refiro a pais e avós que estão na faixa dos 60 e 70 anos, muitos em atividade, porque esses, provavelmente, são inclusive os que vão abrir a carteira para animar as festas de fim de ano. Falo de entes queridos mais velhos, talvez menos ativos e alguns enfrentando o declínio cognitivo, mas cujas vidas não se resumem a ver TV e dormir. Sim, aqueles que, invariavelmente, ganham chinelos e camisolas. Que tal pensar em lembranças que possam ser estimulantes, prazerosas e divertidas? Esses foram meus critérios para montar uma lista com produtos cujos preços não sejam exorbitantes. Que sirva de inspiração para outras ideias! </p> </div> <div class="wall protected-content">

<p class="content-text__container " data-track-category="Link no Texto" data-track-links=""> Vou começar com meu tipo de presente preferido: livros! Mesmo que o idoso não tenha o hábito de ler, um livro de fotos sobre um assunto que lhe agrade proporcionará bons momentos de lazer: com imagens da cidade ou região onde a pessoa cresceu; sobre flores e paisagens; animais; esportes; artistas ou músicos da época de sua juventude. Ainda na categoria imagens: para quem está com uma folga no orçamento, um porta-retratos digital serve para matar as saudades dos familiares, principalmente se as visitas não são constantes. </p> </div> <div class="mc-column content-text active-extra-styles " data-block-type="unstyled" data-block-weight="123" data-block-id="5"> <p class="content-text__container " data-track-category="Link no Texto" data-track-links=""> No quesito diversão, assinar um serviço de streaming na TV pode ampliar as opções de entretenimento, mas é importante checar se ele ou ela sabe lidar com os controles e os aplicativos; do contrário, talvez não aproveite o presente. Amplie o leque e pense nas lojas de brinquedos como uma alternativa e comece procurando um quebra-cabeça de peças grandes. Para os mais velhos e com menor destreza manual, as peças pequenas são incômodas de manusear. Embora os motivos infantis dominem o mercado de peças maiores, há puzzles de aves e paisagens – com 24, 60 ou 120 peças. Uma tia querida, em processo de demência, montou inúmeras vezes um quebra-cabeça de pássaros, de 36 peças, encantando-se com o resultado em todas as ocasiões. </p> </div> <div class="content-ads content-ads--reveal" data-block-type="ads" data-block-id="6">

<p class="content-text__container " data-track-category="Link no Texto" data-track-links=""> Se o idoso tiver companhia, a variedade de escolhas aumenta: jogos da memória (com motivos que não sejam infantis), bingo, damas, dominó... Se houver a possibilidade de ser iniciado no mundo dos videogames, melhor ainda, porque embute a chance de aprofundar a convivência com os netos. Nos casos de demência avançada, acariciar animais de pelúcia ajuda a diminuir o estresse; os brinquedos capazes de algum “engajamento”, como bichinhos que miam, ronronam ou latem (sem estardalhaço) se tornam companheiros e amenizam a sensação de isolamento. </p> </div> 

<p class="content-text__container " data-track-category="Link no Texto" data-track-links=""> Na seção bem-estar, o cobertor ponderado, ou manta de gravidade, é mais pesado do que as cobertas comuns e funciona como aliado para um sono de boa qualidade. Pense também em almofadas de apoio para a região lombar; cremes para massagear os pés e as mãos; difusores de ambiente com aromas tranquilizantes (mas não velas aromáticas!); roupas e sapatos com velcro, fáceis de vestir e calçar; e mesmo uma escova de dentes elétrica para quem começa a ter problemas em zelar pela própria higiene. Até um calendário grande, de parede, dá uma mãozinha a quem se atrapalha com os meses e dias da semana. </p> </div> </div>` 

console.log(texto.match(/(?<=<p.*>).*(?=<\/p>)/g))

