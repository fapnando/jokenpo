function randomComputer(){
	return Math.floor((Math.random() * 3) + 1);
}

function calculaResultado(opcaoJogador,opcaoComputador){
	$('.versus-last').html('<img src="images/'+imagem(opcaoComputador)+'.jpg">');
	if(opcaoJogador == 1 && opcaoComputador == 3){
		return true;
	}else if(opcaoJogador == 2 && opcaoComputador == 1){
		return true;
	}else if(opcaoJogador == 3 && opcaoComputador == 2){
		return true;
	}else if(opcaoJogador == opcaoComputador){
		return 'empate';
	}else{
		return false;
	}
}

function imagem(opcao){
	if(opcao == 1){
		return 'pedra';
	}else if(opcao == 2){
		return 'papel';
	}else{
		return 'tesoura';
	}
}

$(document).ready(function(){
	$(document).on('click','.jogador',function(){
		escolha = $(this).data('escolha');
		$('.versus-first').html('<img src="images/'+imagem(escolha)+'.jpg">');
		resultado = calculaResultado(escolha,randomComputer());
		if(resultado == true){
			alert('ganhou');
		}else if(resultado == 'empate'){
			alert('empate');
		}else{
			alert('perdeu');
		}
	});
});