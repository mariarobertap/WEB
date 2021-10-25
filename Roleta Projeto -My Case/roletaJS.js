window.onload = function() {
    roll(new Caixa(1, 'CaixaExemplo',
    [new Item1('rgb(224, 21, 214)', false, 'AK-47', 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alDLPIhm5D18d0i_rVyoD8j1yglB89IT6mOoWUegM-aFvX_Fe_yO3q1Ja6vsnMn3Q163YntH6Lnxfh1UpFbrdng_SACQLJQIlmyYc/150fx122f'),
     new Item2('rgb(226, 23, 33)', false, 'Knife', 'https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09izl4mGluP7IYTdn2xZ_Pp9i_vG8MKk2Qbn_UJqYG_1I9OUJlI6ZwvTrlm4yLrngZLpv5XNmHBgvyQm4H7egVXp1lh8h_GV/150fx122f'),
     new Item3('rgb(226, 23, 33)', false, 'Knife', 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PTbTjlH7du6kb-KkPDmNqjCmXlu5Mx2gv3--Y3nj1H6_kI6NTv7I9CVcVdrYQzTqVW4xrrrgZe-6p6ay3ZluiYl4nvVyhO21QYMMLLk7OGppA/150fx122f'),
     new Item4('rgb(172, 197, 29)', false, 'Glove', 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf1ObcTj5X09ujgL-HmOXxDLfYkWNF18lwmO7Eu9n2jgG1_ERlZGH1I4PHJgVqY1_Wq1m4we_o0JDovcuamCE3vXJ05X_D30vgSo6bU-Y/150fx122f'),
     new Item5('rgb(172, 197, 29)', false, 'Glove', 'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0PLGeC597d2JkoGPksj4OrzZglRd6dd2j6eYp9Si3ley-EE4NmD3ctTBegJsaA2D-1foxe7q1MDtupXMwSdlu3In-z-DyHch2Jqo/150fx122f')]))
}
function Item(colour, id, name, certificado, image) {
    this.id = id;  
    this.name = name;
    this.classe = certificado;
    this.image = image;
    this.colour = colour;
}


function Caixa(id, name, items) {
    this.id = id;   
    this.name = name;
    this.items = items;   
}


function Item1(colour, certificado, nome, image) {
    this.item = new Item(colour, 1, nome, 0, image);
    this.colour = colour; //0: standard, 1: weiß, 2: grau, 3: schwarz, 4: pink, 5: lila, 6: blau, 7: hellblau, 8: türkis, 9: hellgrün, 10: grün, 11: gelb, 12: gold, 13: orange, 14: rot
    this.certificado = certificado;
    this.image = image
}
function Item2(colour, certificado, nome, image) {
    this.item = new Item(colour, 2, nome, 1, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item3(colour, certificado, nome, image) {
    this.item = new Item(colour, 3, nome, 2, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item4(colour, certificado, nome, image) {
    this.item = new Item(colour, 4, nome, 3, image);
    this.colour = colour;
    this.certificado = certificado;
    this.image = image
}
function Item5(colour, certificado, nome, image) {
    this.item = new Item(colour, 5, nome, 4, image);
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
        roleta.style.webkitAnimationDuration = "4s";
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
    biggerDivElem.style.backgroundRepeat = document.getElementById("blockNr" + whichItem).style.backgroundRepeat = "no-repeat";
    biggerDivElem.style.backgroundPosition = document.getElementById("blockNr" + whichItem).style.backgroundPosition = "center";
    biggerDivElem.style.backgroundColor = document.getElementById("blockNr" + whichItem).style.backgroundColor = itensRoleta[whichItem].item.colour;


    biggerDivElem.addEventListener("webkitAnimationEnd", function (e) {
        biggerDivElem.parentNode.removeChild(biggerDivElem);
    });
    //biggerDivElem.innerHTML = itensRoleta[whichItem].item.name + "<br>";
    
    Mudarestado("mycaseSimulator")
  

    document.body.appendChild(biggerDivElem);

   
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
        
            
             myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, itemAleatorio.colour, i);

            
            
            itemAleatorio.zertifiziert = certifyItem();

           itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 83 && randomTier > 55) {
           

            itemAleatorio = ListaItensTier1[randomItem(ListaItensTier1)];
          
            itemAleatorio.zertifiziert = certifyItem();
           
            myimage = "url('"+itemAleatorio.image+"')";
             
            showItemRoleta(myimage, itemAleatorio.colour, i);
            itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 95 && randomTier > 83) {

         


            itemAleatorio = ListaItensTier2[randomItem(ListaItensTier2)];
          
            itemAleatorio.zertifiziert = certifyItem();
             myimage = "url('"+itemAleatorio.image+"')";
             console.log(itemAleatorio.image)
             showItemRoleta(myimage, itemAleatorio.colour, i);
            itensRoleta.push(itemAleatorio);
        }
        else if(randomTier <= 99 && randomTier > 95) {


            


            itemAleatorio = ListaItensTier3[randomItem(ListaItensTier3)];
 
            itemAleatorio.zertifiziert = certifyItem();
            document.getElementById("blockNr" + i).innerHTML = itemAleatorio.item.name;
             myimage = "url('"+itemAleatorio.image+"')";
             
             showItemRoleta(myimage, itemAleatorio.colour, i);
            itensRoleta.push(itemAleatorio);
        }
        else {
    

  

            itemAleatorio = ListaItensTier4[randomItem(ListaItensTier4)];
            
            itemAleatorio.zertifiziert = certifyItem();
             myimage = "url('"+itemAleatorio.image+"')";
             
             showItemRoleta(myimage, itemAleatorio.colour, i);
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