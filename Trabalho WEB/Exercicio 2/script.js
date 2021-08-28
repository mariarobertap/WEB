

function somar(e, operacao) {
    e.preventDefault();
    var campo = document.getElementById('quantity').value;
    var campo2 = document.getElementById('quantity2').value;
    if(operacao == '+'){
        console.log(campo.value);
        var tela = document.getElementById('resultado');
        campo = Number(campo);
        campo2 = Number(campo2);
        campo = campo + campo2
        campo = String(campo)
        console.log(typeof campo)
        tela.innerHTML = campo 
    }else if(operacao == '-'){
        console.log(campo.value);
        var tela = document.getElementById('resultado');
        tela.innerHTML = 'menos' 
    }else if(operacao == '/'){
        console.log(campo.value);
        var tela = document.getElementById('resultado');
        tela.innerHTML = 'asfas' 
    }else if(operacao == '*'){
        console.log(campo.value);
        var tela = document.getElementById('resultado');
        tela.innerHTML = 'asdas' 
    }
}