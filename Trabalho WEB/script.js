
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
var element = document.getElementById('resolution2');
element.innerHTML = '<p align="top"> Meu titulo! </p>'


/*              Exercicio 4
Ao passar o mouse sobre os quadrados, defina uma borda de 2px
*/

var p = document.getElementById("resolution1");

teste.onmouseover = function(e){
    teste.style.border = '2px solid black';
}

teste.onmouseleave = function(e){
    teste.style.border = '2px '; 
}