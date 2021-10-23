
function Item(id, name, certificado, image) {
    this.id = id;  
    this.name = name;
    this.classe = certificado;
    this.image = image
}


function Caixa(id, name, items) {
    this.id = id;   
    this.name = name;
    this.items = items;   
}


function Item1(colour, certificado, nome, image) {
    this.item = new Item(1, nome, 0, image);
    this.colour = colour; //0: standard, 1: weiß, 2: grau, 3: schwarz, 4: pink, 5: lila, 6: blau, 7: hellblau, 8: türkis, 9: hellgrün, 10: grün, 11: gelb, 12: gold, 13: orange, 14: rot
    this.certificado = certificado;
    this.image = image
}
function Item2(colour, certificado, nome, image) {
    this.item = new Item(2, nome, 1, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item3(colour, certificado, nome, image) {
    this.item = new Item(3, nome, 2, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item4(colour, certificado, nome, image) {
    this.item = new Item(4, nome, 3, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item5(colour, certificado, nome, image) {
    this.item = new Item(5, nome, 4, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}



var random;
var itensRoleta = [];
var inventar = [];
var roletaOpen = false;
var rollingBlocked = false;
var itemDetailsOpen = false;

function roll(caixa) {
    console.log(rollingBlocked)
    if(rollingBlocked === false) {
        rollingBlocked = true;
        openRoleta();
        preencherRoleta(caixa);
       
        var roleta = document.getElementById("roleta");
        roleta.style.top = "-14000px";
        Mudarestado("mycaseSimulator")
        //Animation
        random = Math.floor((Math.random()*500)+10000);    //10000-12000

        var roletaKeyframes = "@-webkit-keyframes roll_ani {0% {top: -14000px} 100% {top: " + (-14000+random) + "px}}";

        //Animation 
        var roletaKeyframesTextNode = document.createTextNode(roletaKeyframes);
        document.getElementsByTagName("style")[0].appendChild(roletaKeyframesTextNode);

        roleta.style.webkitAnimationName = "roll_ani";
        roleta.style.webkitAnimationDuration = "6s";
        roleta.addEventListener("webkitAnimationEnd", rodarRoleta);
    }
}

function rodarRoleta() {
    rollingBlocked = false;

    var roleta = document.getElementById("roleta");
    roleta.style.removeProperty("-webkit-animation-name");
    roleta.style.removeProperty("-webkit-animation-duration");

    roleta.style.top = (-14000+random) + "px";


    var position = 14000-random;
    var whichItem = Math.floor((position+350)/200);
    roleta.removeEventListener("webkitAnimationEnd", rodarRoleta);
    var biggerDivElem = document.createElement("div");
    biggerDivElem.setAttribute("class", "bigBlock");
    var myimage = "url('"+itensRoleta[whichItem].item.image+"')"
    biggerDivElem.style.backgroundImage = document.getElementById("blockNr" + whichItem).style.backgroundImage = myimage;
    biggerDivElem.addEventListener("webkitAnimationEnd", function (e) {
        biggerDivElem.parentNode.removeChild(biggerDivElem);
    });
    biggerDivElem.innerHTML = itensRoleta[whichItem].item.name + "<br>";
    
    Mudarestado("mycaseSimulator")
  

    document.body.appendChild(biggerDivElem);

    //Laufband schließen
    openRoleta();
}

function openRoleta() {
    if(roletaOpen === false) {
        document.getElementById("sombraRoleta").style.display = "inline";
        roletaOpen = true;
    }
    else {
        document.getElementById("sombraRoleta").style.display = "none";
        roletaOpen = false;
    }
}
function preencherRoleta(caixa) {
    var divElem;
    var randomTier;
    var myimage;
    var items = caixa.items;
    var ListaItensTier0 = [];
    var ListaItensTier1 = [];
    var ListaItensTier2 = [];
    var ListaItensTier3 = [];
    var ListaItensTier4 = [];
    var itemAleatorio;
    itensRoleta.splice(0, 75);    

    for(var j = 0; j < items.length; j++) {
        switch(items[j].item.classe) {
            case 0:
                ListaItensTier0.push(items[j]);
                break;
            case 1:
                ListaItensTier1.push(items[j]);
                break;
            case 2:
                ListaItensTier2.push(items[j]);
                break;
            case 3:
                ListaItensTier3.push(items[j]);
                break;
            case 4:
                ListaItensTier4.push(items[j]);
                break;
        }
    }

    for(var i = 0; i < 100; i++) {
        
        divElem = document.createElement("div");
        divElem.setAttribute("id", "blockNr" + i);
        divElem.setAttribute("class", "block");
        document.getElementById("roleta").appendChild(divElem);
        document.getElementById("blockNr" + i).style.top = 200*i + "px";

        randomTier = Math.floor((Math.random()*100)+1);   //1-100
        if(randomTier <= 55) {
    
            
            
            itemAleatorio = ListaItensTier0[randomItem(ListaItensTier0)];
            itemAleatorio.farbe = randomColor();
            
             myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, "blue", i);

            
            
            itemAleatorio.zertifiziert = certifyItem();

           itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 83 && randomTier > 55) {
           

            itemAleatorio = ListaItensTier1[randomItem(ListaItensTier1)];
            itemAleatorio.farbe = randomColor();
            itemAleatorio.zertifiziert = certifyItem();
           
            myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, "mediumpurple", i);
            itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 95 && randomTier > 83) {

         


            itemAleatorio = ListaItensTier2[randomItem(ListaItensTier2)];
            itemAleatorio.farbe = randomColor();
            itemAleatorio.zertifiziert = certifyItem();
             myimage = "url('"+itemAleatorio.image+"')";
             console.log(itemAleatorio.image)
            showItemRoleta(myimage, "red", i);
            itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 99 && randomTier > 95) {


            


            itemAleatorio = ListaItensTier3[randomItem(ListaItensTier3)];
            itemAleatorio.farbe = randomColor();
            itemAleatorio.zertifiziert = certifyItem();
            document.getElementById("blockNr" + i).innerHTML = itemAleatorio.item.name;
             myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, "yellow", i);
            itensRoleta.push(itemAleatorio);
        }
        else {
    

  

            itemAleatorio = ListaItensTier4[randomItem(ListaItensTier4)];
            itemAleatorio.farbe = randomColor();
            itemAleatorio.zertifiziert = certifyItem();
             myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, "purple", i);
            itensRoleta.push(itemAleatorio);
        }
    }

}

function showItemRoleta(url, backgroud, index){
    document.getElementById("blockNr" + index).style.backgroundColor = backgroud;
    document.getElementById("blockNr" + index).style.backgroundImage = url;
    document.getElementById("blockNr" + index).style.backgroundRepeat = "no-repeat";
    document.getElementById("blockNr" + index).style.backgroundPosition = "center";
}

function randomItem(ListaItens) {
    return Math.floor(Math.random()*ListaItens.length); 
}
function randomColor() {
    if(Math.floor(Math.random()*4) === 0) {
        return Math.floor(Math.random()*14)+1;    //1-14
    }
    else {
        return 0;
    }
}
function certifyItem() {
    if(Math.floor(Math.random()*4) === 0) {
        return 1;
    }
    else {
        return 0;
    }

}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}