
/*              Exercicio 2
Alterar a cor de fundo da div abaixo para #fdd
*/
var exercicio1Pai = document.getElementById('resolution1');
var child_nodes = exercicio1Pai.childNodes;
var square1 = child_nodes[1];
square1.style.backgroundColor = '#fdd';

/*              Exercicio 3
Adicionar um parágrafo com um texto e altere o alinhamento para que o texto fique a esquerda
*/

var parent2 = document.getElementById('resolution2');
var child_nodes2 = parent2.childNodes;
var square2 = child_nodes2[1];
square2.innerHTML = '<p align="left"> Meu titulo! </p>'


/*              Exercicio 4
Ao passar o mouse sobre os quadrados, defina uma borda de 2px
*/

var p = document.getElementById("resolution1");//

square1.onmouseover  = function(e){
    square1.style.border = '2px solid black';
}

square1.onmouseleave = function(e){
    square1.style.border = '2px '; 
}


square2.onmouseover  = function(e){
    square2.style.border = '2px solid black';
}

square2.onmouseleave = function(e){
    square2.style.border = '2px '; 
}
/*              Exercicio 5
Criar um botão utilizando a classe .btn que ao ser clicado esconda todos os quadrados
*/

var butao = document.getElementById('resolution5');
butao.innerHTML = '<button class ="btn" onclick="hideSquares()"> Click me if you want to HIDE all squares! </button>'

function hideSquares() {
 
    square1.style.display = "none"
    square2.style.display = "none"
    butao.innerHTML = '<button class ="btn" onclick="showSquares()"> Click me if you want to SHOW all squares! </button>'

}

function showSquares() {
  
    square1.style.display = ""
    square2.style.display = ""
    butao.innerHTML = '<button class ="btn" onclick="hideSquares()"> Click me if you want to HIDE all squares! </button>'

}
