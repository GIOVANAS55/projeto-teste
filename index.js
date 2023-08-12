
var setaDireita = window.document.getElementById("setadireita")
var cardleonardo= window.document.getElementById("cardleonardo")
var cardsamantha = window.document.getElementById("cardsamantha")
var cardbruna = window.document.getElementById("cardbruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita(){
cardleonardo.style = "display:none"
cardbruna.style = "display:flex"
setaDireita.style = "displauy;:none"
setaEsquerda.style = "display:flex; margin-top:55px"
}

function RolarParaEsquerda(){
cardleonardo.style = "display:flex"
cardbruna.style = "display:none"
setaDireita.style = "display:flex; margin-top:55px"
setaEsquerda.style = "display:none"
}