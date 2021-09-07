var campo = document.getElementsByClassName('campo')[0];
var historico = document.getElementsByClassName('historico')[0];
var subTotal = 0;
var operador = undefined;
var percentual = undefined;

function atualizaHistorico() {
    historico.innerHTML = subTotal;
}

function limpaCampo() {
    campo.value = '0';
    subTotal = 0;
    operador = undefined;
    atualizaHistorico();
}

function insereNumero(event) {
    // if (!['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(event.key)) {
    //     event.preventDefault();
    // }
    if (!event.key.match(/\d/g)) {
        event.preventDefault();
    }
}

function digitaNumero(numero) {
    if (campo.value == '0') {
        campo.value = numero;
    } else {
        campo.value = campo.value + numero;
    }
}

function adicionaPonto() {
    if (!campo.value.includes('.')) {
        campo.value = campo.value + '.';
    }
}

function mudaSinal() {
    campo.value = campo.value * -1;
}

function mostraResultado() {
    if (operador == '+') {
        campo.value = subTotal + parseInt(campo.value);
    } else if (operador == '-') {
        campo.value = subTotal - parseInt(campo.value);
    } else if (operador == '/') {
        campo.value = subTotal / parseInt(campo.value);
    } else if (operador == '*') {
        campo.value = subTotal * parseInt(campo.value);
    } else if(operador == '%') {
        campo.value = (campo.value / 100) * subTotal;
    }
}

function subtracao() {
    mostraResultado();
    subTotal = parseInt(campo.value);
    atualizaHistorico();
    operador = '-';
    campo.value = '0';
}

function soma() {
    mostraResultado();
    subTotal = parseInt(campo.value);
    atualizaHistorico();
    operador = '+';
    campo.value = '0';
}

function divisao() {
    mostraResultado();
    subTotal = parseInt(campo.value);
    atualizaHistorico();
    operador = '/';
    campo.value = '0';
}

function multiplicacao() {
    mostraResultado();
    subTotal = parseInt(campo.value);
    atualizaHistorico();
    operador = '*';
    campo.value = '0';
}

function porcentagem() {
    mostraResultado();
    subTotal = parseInt(campo.value);
    atualizaHistorico();
    operador = '%';
    campo.value = '0';
}

function aoQuadrado() {
    campo.value = Math.pow(campo.value, 2);
}