
class Lista {

    constructor(descricao, quantidade, unidade)
    {
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.unidadeMedida = unidade;
   
    }
}
var lists = []
document.getElementById("myButton").onclick = function(e){

    var descricao = document.getElementById('descricao').value;
    var qauntity = document.getElementById('quantity').value;
    var un = document.getElementById('UN').value;
   
    e.preventDefault();

    console.log(descricao)
    descricao = String(descricao)

    if(descricao != " " && qauntity != 0){
        let Mylist = new Lista(descricao,qauntity, un);
        lists.push(Mylist)
        console.log(lists);
        console.log(lists.length);
    }


    //tela.innerHTML = result;
}