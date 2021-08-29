
function somar(e, operacao) {
    e.preventDefault();
    var campo = document.getElementById('quantity').value;
    var campo2 = document.getElementById('quantity2').value;
    var tela = document.getElementById('resultado');
    var resultado;
    campo = Number(campo);
    campo2 = Number(campo2);

    switch (operacao){
        case '+':
            campo = campo + campo2
            campo = String(campo)
        break;
        case '-':
            campo = campo - campo2
            campo = String(campo)

        break;
        case '/':
            campo = campo / campo2
            campo = String(campo)

        break;
        case '*':
            campo = campo * campo2
            campo = String(campo)
        break;

    }

    tela.innerHTML = "Resultado = " + campo  

}