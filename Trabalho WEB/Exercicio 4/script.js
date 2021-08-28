var tela = document.getElementById('resultado');

document.getElementById("myButton").onclick = function(e){
    e.preventDefault();
    var f = document.getElementById("quantity").value;
    var result = (f - 32) * (5/9);

    tela.innerHTML = result;
}