
// Insere na tela 

function insert(x) {
  var botao = x;
  var valor = document.querySelector('h2').innerHTML;
  document.getElementsByClassName('urna__tela')[0].innerHTML = valor + x;
}


// capturar o que está dentro do h2

function  confirmar(){
  var valor = document.querySelector('h2').innerHTML;
  if(valor == 13){
    console.log("é o Lulinha");
  }

  else if(valor == 22){
    console.log("é o Biroliro");
  }

  // if(valor !== 13 && valor !==22){
  //   document.getElementsByClassName('tela')[0].innerHTML = "ERRO 404 <br> NÃO ENCONTRADO ";

  // }
}

// corrige:  apaga o ultimo número digitado

function corrige(){

  var digitos = document.querySelector('h2').innerHTML;
  document.getElementsByClassName('urna__tela')[0].innerHTML = digitos.substring(0, digitos.length - 1 )
}

// Vota em branco 

function branco() {

  document.getElementsByClassName('urna__tela')[0].innerHTML = '';

  // acessar o body e mostar o voto em branco !!!

}