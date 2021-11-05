//Transforma em caixa baixa todo texto digitado
function caixaBaixaemail() {
    var x = document.getElementById("email");
    x.value = x.value.toLowerCase();    
}

//Transforma em caixa baixa todo texto digitado
function caixaBaixaorigem() {
    x = document.getElementById("origem");
    x.value = x.value.toLowerCase();
}

//Transforma em caixa baixa todo texto digitado
function caixaBaixadestino() {
   var y = document.getElementById("destino");
   y.value = y.value.toLowerCase();    
}

//Desativa datas de ida e volta
function desativarDatas(selecionado) {
    document.getElementById('dataVolta').disabled = selecionado;
    document.getElementById('dataIda').disabled = selecionado;
}


//MUDAR COR DA LETRA NO ONKEYDOWN
function mudaCorletra(x) {
  x.style.color = "#2800ad";
}


//MUDAR COR DO INPUT NO ONBLUR
function mudarCorfundodestino() {
  document.getElementById("destino").style.background = "#3faf3f";
}

function mudarCorfundoorigem() {
  document.getElementById("origem").style.background = "#3faf3f";
}

function mudarCorNomeAdulto() {
  document.getElementById("nome-adulto").style.background = "#3faf3f";
}

function mudarCorPassaporte() {
  document.getElementById("numero-passaporte-adulto").style.background = "#3faf3f";
}
 
function mudaCorClasse() {
  document.getElementById("classe-passagem").style.background = "#3faf3f";
}

function mudarCordataIda() {
  document.getElementById("dataIda").style.background = "#3faf3f";
}

function mudarCordataVolta() {
  document.getElementById("dataVolta").style.background = "#3faf3f";
}

function mudarCorMenor() {
  document.getElementById("status").style.background = "#3faf3f";
}

// RESUMO DA COMPRA 
function compraConcluida() {
    var embarque = document.getElementById("origem").value;
    var destino = document.getElementById("destino").value; 
    var dataIda = document.getElementById("dataIda").value;
    var dataVolta = document.getElementById("dataVolta").value;
    var classePassagem = document.getElementById('classe-passagem').value;
    var nomeAdulto = document.getElementById('nome-adulto').value;
    var numeroPassaporteAdulto = document.getElementById('numero-passaporte-adulto').value;
    confirm('A viagem está em nome de: '+nomeAdulto+', com passaporte de número: '+ numeroPassaporteAdulto + '.  Sua viagem está marcada para o dia: '+ dataIda + '. Cidade de embarque: ' + embarque + ', e destino para na cidade de: ' +destino+ ', data de chegada será no dia: ' + dataVolta +'. Você optou em viajar pela classe: ' + classePassagem);
}

// FUNÇÃO ADD CAMPO DE COMPRA PASSAGEIRO ADULTO
var newid = 1;
function adicionaPassageiro() {
var formulario = document.getElementById("inputsPassageiroadulto")
var cln = formulario.cloneNode(true);
cln.id = cln.id+newid;
document.getElementById("div").append(cln);
newid = newid+1;
}

function removerPassageiro(){
document.getElementById("div").lastChild.remove();

}

// RESTRIÇÃO, SOMENTE ADULTO PREENCHER O CAMPO DE COMPRA DE PASSAGEM DE MENOR DE 18
function alertaLogin() {
  window.alert("O preenchimento deste campo é possível somente se um adulto efetuar o LOGIN na conta.");
}

//MUDAR COR DO CAMPO VAZIO PARA VERMELHO
function mudaCorCampo() {
  if (document.getElementById("origem").value=="") {
    document.getElementById("origem").style.backgroundColor="red";
  }
  else
  document.getElementById("origem").style.backgroundColor="#3faf3f";
}

/*https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"

//HABILITAR FORMULÁRIO OCULTO MENOR DE IDADE
/*src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
$('#status').change(function () {
    var valor = $('#status').val();
    if (valor == "sim") {
        $('#nome').show();
    }
    else {
        $('#nome').hide();
    }
});
*/