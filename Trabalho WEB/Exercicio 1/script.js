
/*              Exercicio 2
Alterar a cor de fundo da div abaixo para #fdd
*/
var parent = document.getElementById('resolution1');
var child_nodes = parent.childNodes;
console.log("child_nodes.length: " + child_nodes.length);
console.log(child_nodes[1]);
var teste = child_nodes[1];
teste.style.backgroundColor = '#fdd';

/*              Exercicio 3
Adicionar um parágrafo com um texto e altere o alinhamento para que o texto fique a esquerda
*/
//var element = document.getElementById('resolution2');
//element.innerHTML = '<p align="top"> Meu titulo! </p>'


/*              Exercicio 4
Ao passar o mouse sobre os quadrados, defina uma borda de 2px
*/

var p = document.getElementById("resolution1");//

teste.onmouseover = function(e){
    teste.style.border = '2px solid black';
}

teste.onmouseleave = function(e){
    teste.style.border = '2px '; 
}

/*              Exercicio 5
Criar um botão utilizando a classe .btn que ao ser clicado esconda todos os quadrados
*/

var butao = document.getElementById('resolution5');
butao.innerHTML = '<button class ="btn" onclick="hideSquares()"> Click me if you want to HIDE all squares! </button>'

function hideSquares() {
    document.getElementById("resolution1").style.display = "none";  
    document.getElementById("resolution2").style.display = "none";  
    butao.innerHTML = '<button class ="btn" onclick="showSquares()"> Click me if you want to SHOW all squares! </button>'

}

function showSquares() {
    document.getElementById("resolution1").style.display = "";  
    document.getElementById("resolution2").style.display = "";  
    butao.innerHTML = '<button class ="btn" onclick="hideSquares()"> Click me if you want to HIDE all squares! </button>'

}
