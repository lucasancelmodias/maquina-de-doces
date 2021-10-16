$( window ).on( "load", function() {
    
    render()
});

function render(){
    var saldoValor = document.getElementById("saldoValor")
    saldoValor.innerHTML = saldo
    //`${saldo},00`

    var trocoValor = document.getElementById("trocoValor")
    trocoValor.innerHTML = troco
    //`${troco},00`
}
var doces = {
    "A" : 6,
    "B" : 7,
    "C" : 8
}
var saldo = 0;
var troco = 0;

function adicionarSaldo(event){
    saldo = parseInt(saldo) + parseInt(event.value)
    render()
}

function desistir(){
    saldo = 0
    troco = 0
    render()
}

function comprar(){
    var opcao = $( "input[name=options]:checked" ).val()
    
    if(opcao && saldo > doces[opcao]){
        console.log('comprando', doces[opcao])
        saldo = parseInt(saldo) - doces[opcao]
        console.log('saldo atual', saldo)
        render()
    }
}