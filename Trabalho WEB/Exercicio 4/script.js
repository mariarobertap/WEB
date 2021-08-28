
class Lista {

    constructor(descricao, quantidade, unidade)
    {
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.unidadeMedida = unidade;
   
    }
}
var lists = []
 // set this to your table

document.getElementById("myButton").onclick = function(e){

    var descricao = document.getElementById('descricao').value;
    var qauntity = document.getElementById('quantity').value;
    var un = document.getElementById('UN').value;
   var orderArray = 1;
    e.preventDefault();

    console.log(descricao)
    descricao = String(descricao)

    if(descricao != " " && qauntity != 0){
        let Mylist = new Lista(descricao,qauntity, un);
        lists.push(Mylist)
        console.table(lists);

       
        var inferno = document.getElementById('resultado')
        var porra  = display();

        porra.outerHTML
        inferno.innerHTML = porra
    }
}

function display() {
    var table = document.createElement("table");
    for (var i=0; i<lists.length; i++) {
        var row = table.insertRow();
        for (var j=0; j<lists[i].length; j++) {
            var cell = row.insertCell();
            cell.appendChild(document.createTextNode(lists[i][j]));
        }
    }
    table = String(table)
    console.log(table)
    return table;
}