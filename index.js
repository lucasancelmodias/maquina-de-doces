$( window ).on( "load", function() {
    
    render('Bem vindo, por favor insira um valor.','','',false)
});

function render(messagem, doce, trocoMessage ,sucesso){
    var saldoValor = document.getElementById("saldoValor")
    saldoValor.innerHTML = saldo

    var trocoValor = document.getElementById("trocoValor")
    trocoValor.innerHTML = troco

    var mensagemSaida = document.getElementById("mensagemSaida")
    mensagemSaida.innerHTML = (sucesso) ? messagem + doce + trocoMessage : messagem;

    if(sucesso){
        document.getElementById('ImagemDoce').innerHTML = '<img src="imgs/Doce' +doce + '.png" id="imageBox"/>';
    }else{
        document.getElementById('ImagemDoce').innerHTML =''
    }
}
var doces = {
    "A" : 6,
    "B" : 7,
    "C" : 8
}
var saldo = 0;
var troco = 0;

var message = 'teste';

function adicionarSaldo(event){
    var somaSaldo = parseInt(saldo) + parseInt(event.value)
    if(somaSaldo <= 10 && troco == 0) {
        saldo = somaSaldo
        render('Bem vindo, por favor insira um valor.','','',false)
    } else if (somaSaldo > 10) {
        render('A maquina não suporta mais de R$ 10,00','','',false)
    } else {
        render('Para realizar uma nova compra, finalize e retire seu troco.','','',false)
    }
}

function desistir(){
    saldo = 0
    troco = 0
    render('Bem vindo, por favor insira um valor.','','',false)
}

function comprar(){
    var opcao = $( "input[name=options]:checked" ).val()
    
    devolucao = parseInt(saldo) - doces[opcao]
    saldoInvalido = doces[opcao] - parseInt(saldo)

    if(opcao && saldo >= doces[opcao]){
        troco = devolucao
        saldo = 0
        render('Obrigado por comprar o doce ',opcao,' Seu troco é de R$' + troco,true,)
    } else {
        render('Você ainda não possui saldo suficiente para comprar o doce. Adicione mais ' + saldoInvalido + ' para compra-lo','','',false)
    }
}
