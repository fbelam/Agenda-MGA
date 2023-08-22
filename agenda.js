var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');

    function mostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
}

function ocultarNovoevento() {
    novoEvento.classList.add('d-none');
}

function novoEventoValido(nomeEvento, dataEvento) {
    var validacaoOk = true;
    if (nomeEvento.trim().length === 0) {
        inputNomeEvento.classList.add('is-invalid');
        validacaoOk = false;
    }else{
        inputNomeEvento.classList.remove('is-invalid');

    }
    var timestampEvento = Date.parse(dataEvento);
    var timestampAtual = (new Date()).getTime();
    if (isNaN(timestampEvento) || timestampEvento < timestampAtual) {
        inputDataEvento.classList.add('is-invalid');
        validacaoOk = false;   
    }else {
        inputDataEvento.classList.remove('is-invalid');
    }
    return validacaoOk;
}

function salvarNovoEvento(event){
    event.preventDefault();
    var nomeEvento = inputNomeEvento.value;
    var dataEvento = new Date (inputDataEvento.value);
    if (novoEventoValido(nomeEvento, dataEvento)) {
        console.log('Evento valido!');
    } else {
        console.log('Evento invalido!');
    }
}

buttonNovoEvento.addEventListener('click', mostrarNovoEvento);
buttonCancelar.addEventListener('click', ocultarNovoevento);
formNovoEvento.addEventListener('submit', salvarNovoEvento);