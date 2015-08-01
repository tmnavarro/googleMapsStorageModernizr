

$(document).ready(function(){

	if(!localStorage.user){
		localStorage.user = JSON.stringify({name: "Raul Gil", email: 'raul@gil.com'});
	}else{
		console.log(JSON.parse(localStorage.user));
	}


	$('#enviar').click(function(){
		var pessoa = {nome: $('#firstName').val(), sobrenome: $('#lastName').val(), email: $('#email').val()};

		
		localStorage.pessoa = JSON.stringify(pessoa);

		alert('Gravado em Storage!');

		$('.visualizar').slideDown();

		$('#nome').html(pessoa.nome);
		$('#sobrenome').html(pessoa.sobrenome);
		$('#emailEscrito').html(pessoa.email);
	});



});

