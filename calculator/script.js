
var campo = document.getElementsByClassName('campo')[0]

function digitaNumero(numero) {
    if (campo.value == '0') {
        campo.value = numero;
    } else {
        campo.value = campo.value + numero;
    }
}

function limpaCampo() {
    campo.value = '0';
}

function adicionaPonto() {
    // se não tiver ponto, adicionar ponto
    // se já tiver ponto, não adicionar ponto
    
    if (campo.value.includes('.')) {
        // faça nada
        console.log('if')
    } else {
        campo.value = campo.value + '.';
        console.log('else')
    }
}

// console.log(campo.value)

// campo.style.backgroundColor = '#fff';

// campo.value = 5;

// console.log(campo.value)