'use strict'; /*O "use strict" elimina alguns erros silenciosos que passariam batido do JavaScript e os faz emitir erros. Além disso, essa forma corrige alguns erros que tornam o JavaScript difícil de ser otimizado, então algumas vezes os códigos no modo estrito rodam mais otimizados e velozes do que os códigos no 'modo normal'*/ 


const images = [
    { 'id': '1', 'url':'passarinho.jpg' },
    { 'id': '2', 'url':'passarinho1.jpg' },
    { 'id': '3', 'url':'macaco.jpg' },
    { 'id': '4', 'url':'macaco1.jpg' },
    { 'id': '5', 'url':'Hipopótamo.jpg' },
    { 'id': '6', 'url':'Hipopótamo1.jpg' },
]

const containerItems = document.querySelector('#container-items');

const CarregamentoImagens= () => {
    images.forEach ( imagem => { /*O Javascript contém diversas estruturas de repetição, e uma delas é o "forEach". O forEach é utilizado para percorrer um array. Uma array é uma estrutura de dados que armazena uma coleção de elementos de tal forma que cada um dos elementos possa ser identificado por, pelo menos, um índice ou uma chave. No caso a nossa ARRAY são os elementos que estão dentro da constante "image", que no caso são as nossas imagens os elementos que estão dentro da constante "image" */
        containerItems.innerHTML += ` 
            <div class='item'>
                <img src='${imagem.url}'
            </div>` /*Repare que quando uso InnerHTML quero dizer para o sistema alterar alguma linha do meu html, e a linha neste caso é a que com a id container-items, no caso o que é para substituir é o que vem escrito depois do sinal +=*/ 
             /*Repare que quando coloco => a palavra que vem antes deste sinal se torna o nome da nova função*/
    })    /*Repare também que quando uso o sinal += quero dizer que a próxima coisa escrita está somando com a anterior */
}

CarregamentoImagens( images, containerItems ); /*Coloquei esta constante "CarregamentoImagens" separada porque quando você pretende criar uma constante com outras constantes dentro é necessário fazer desta maneira separada para mostrar para o sistema*/ 


let itens = document.querySelectorAll('.item'); /*Aqui está dizendo que a variavel interna(LET) com nome "itens"é igual a classe "item" */

const previous = () => {
    containerItems.appendChild(itens[0]);  /*O "appendChild serve para dizer SELECIONE* depois dentro do () você deve indicar o que você quer que selecione, no caso eu quero que selecione a CLASSE "ITEM" e o [0] serve para dizer PRIMEIRO   */
    itens = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = itens[itens.length - 1];
    containerItems.insertBefore( lastItem, itens[0] );
    itens = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);