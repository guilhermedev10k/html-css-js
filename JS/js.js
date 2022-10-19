//window.alert('Desenvolvimento de um jogo com JavaScript')
//window.prompt('Qual o seu nome?')
//var nome = window.prompt('Seja bem vindo! Qual o seu nome?')
var nomediv = window.document.getElementById('nome').innerText = `Olá, ${nome}, espero que minha calculadora possa te ajudar!`


function insert(num) {
   var numero = document.getElementById('display2').innerHTML;
   document.getElementById('display2').innerHTML = numero + num
}

function clean() {
    document.getElementById('display2').innerHTML = '';
}

function back(){
    var apagar = document.getElementById('display2').innerHTML
    document.getElementById('display2').innerHTML = apagar.substring(0, apagar.length -1);
}

function calc(){
    var calc = document.getElementById('display2').innerHTML;
    if(calc){
        document.getElementById('display2').innerHTML = eval(calc)
    }
}
