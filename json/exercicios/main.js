$(document).ready(function () {
  $.ajax({
    url: 'pessoas.json',
    type: 'GET',
    dataType: 'json',
    success: function (pessoas) {
      for (const pessoa of pessoas) {
        let tr = $('<tr>');
        // let foto = $('<td>').html($('<img src="' + pessoa.foto + '" />'));
        let foto = $('<td>').html($(`<img src="${pessoa.foto}" class="rounded" />`));
        let nome = $('<td>').html(pessoa.nome);
        let idade = $('<td>').html(pessoa.idade);
        let email = $('<td>').html(pessoa.email);
        let telefone = $('<td>').html(pessoa.telefone);

        tr.append(foto);
        tr.append(nome);
        tr.append(idade);
        tr.append(email);
        tr.append(telefone);

        $('#tablePessoas tbody').append(tr);
      }
    },
  });
});
