/*
var resposta = confirm("deseja excluir");

console.log(resposta);
*/

var a = 10;
var b = 33;

//alert(a+b);

function somar(a, b){
	return a + b;
}

//console.log(somar(20, 22))

document.getElementById("btn-calcular").onclick = function(){
	
	var valorA =document.getElementById("valor-a").value;
	var valorB =document.getElementById("valor-b").value;

	console.log(parseInt(valorA)+parseInt(valorB));
}