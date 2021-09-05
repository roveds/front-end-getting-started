var campo = document.getElementsByClassName('campo')[0];
var historico = document.getElementsByClassName('historico')[0];
var subTotal = 0;
var operador = undefined;

function atualizaHistorico() {
    historico.innerHTML = subTotal;
}

function limpaCampo() {
    campo.value = '0';
    subTotal = 0;
    operador = undefined;
    atualizaHistorico();
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

function aoQuadrado () {
    campo.value = Math.pow(campo.value, 2);
}