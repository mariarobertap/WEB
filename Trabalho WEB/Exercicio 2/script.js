
function somar(e, operacao) {
    e.preventDefault();
    var campo = document.getElementById('quantity').value;
    var campo2 = document.getElementById('quantity2').value;
    var tela = document.getElementById('resultado');
    campo = Number(campo);
    campo2 = Number(campo2);


    if(operacao == '+'){
        campo = campo + campo2
        campo = String(campo)
        tela.innerHTML = campo 
    }else if(operacao == '-'){
        campo = campo - campo2
        campo = String(campo)
        tela.innerHTML = campo 
    }else if(operacao == '/'){
        campo = campo / campo2
        campo = String(campo)
        tela.innerHTML = campo 
    }else if(operacao == '*'){
        campo = campo * campo2
        campo = String(campo)
        tela.innerHTML = campo 
    }
}