
class Lista {

    constructor(descricao, quantidade, unidade)
    {
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.unidadeMedida = unidade;
   
    }
}
var lists = []
var resutaldo = document.getElementById('demo');

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
        console.log(lists.length)
        display()
    }


}

function display() {
    demo.innerHTML = " "
    for(var i = 0; i < lists.length; i++){
        //console.log(lists[i]);
      
        demo.innerHTML += " <br> <input type = 'checkbox' id = '"+ i+"'>" + Object.values(lists[i]).join(" ");
    }
     //lists.forEach(lists => demo.innerHTML += " <br> <input type = 'checkbox'>" + Object.values(lists).join(" "));

}
