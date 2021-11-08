$( window ).on( "load", function() {
    
    render()
});

function render(){
    var saldoValor = document.getElementById("saldoValor")
    saldoValor.innerHTML = saldo

    var trocoValor = document.getElementById("trocoValor")
    trocoValor.innerHTML = troco
}
var doces = {
    "A" : 6,
    "B" : 7,
    "C" : 8
}
var saldo = 0;
var troco = 0;

function adicionarSaldo(event){
    var somaSaldo = parseInt(saldo) + parseInt(event.value)
    if(somaSaldo <= 10 && troco == 0) {
        saldo = somaSaldo
        render()
    } else if (somaSaldo > 10) {
        alert('A maquina não suport mais de 10$')
    } else {
        alert('Para realizar uma nova compra, finalize e retire seu troco.')
    }
    
}

function desistir(){
    saldo = 0
    troco = 0
    render()
}

function comprar(){
    var opcao = $( "input[name=options]:checked" ).val()
    
    devolucao = parseInt(saldo) - doces[opcao]
    saldoInvalido = doces[opcao] - parseInt(saldo)

    if(opcao && saldo >= doces[opcao]){
        troco = devolucao
        saldo = 0
        render()
    } else {
        alert('Voce ainda não possui saldo suficiente para comprar o doce. Adicione mais ' + saldoInvalido + ' para compra-lo')
    }
}