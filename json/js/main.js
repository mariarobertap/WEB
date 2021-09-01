// Recebendo os dados no formato JSON
$(document).ready(function () {
  // $.ajax({
  //   url: '../json/pessoas.json',
  //   // xml, html, script, text
  //   dataType: 'json',
  //   type: 'GET',
  //   success: function (result) {
  //     for (const pessoa of result) {
  //       console.log(pessoa.nome);
  //     }
  //   },
  // });

  // let pessoa = {
  //   ativo: true,
  //   foto: 'http://placehold.it/32x32',
  //   idade: 38,
  //   nome: 'Howard Miles',
  //   email: 'howardmiles@remold.com',
  //   telefone: '+1 (896) 488-2805',
  //   endereco: {
  //     logradouro: 'Rua Araruna',
  //     numero: '123',
  //     Bairro: 'Centro',
  //     cep: '87305-553',
  //   },
  // };

  // // Enviando os dados no formato JSON
  // $.ajax({
  //   url: 'http://localhost:3000/pessoa',
  //   // xml, html, script, text
  //   dataType: 'json',
  //   type: 'POST',
  //   data: JSON.stringify(pessoa),
  //   contentType: 'application/json',
  //   success: function (result) {
  //     console.log(result);
  //   },
  // });

  $.ajax({
    url: "../json/questoes.json",
    dataType: "json",
    type: "GET",
    success: function (result) {
      for (const questao of result) {
        let enunciado = $("<h2>").html(questao.enunciado);
        $("#questoes").append(enunciado);

        for (const alternativa of questao.alternativas) {
          let titulo = $("<p>").html(alternativa.titulo);
          $("#questoes").append(titulo);
        }
      }
    },
  });
});
