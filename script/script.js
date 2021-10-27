window.alert('A Voyager usa cookies para melhorar a sua experiência de navegação!')

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