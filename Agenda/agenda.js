var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoEvento = document.getElementById('novoEvento');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');
var divMensagemErro = document.getElementById('mensagemErro');
var tabelaEventos = document.getElementById('tabelaEventos');

var listaEvento = [];

function atualizarTabelasEventos () {
    if (listaEvento.length === 0) {
        tabelaEventos.innerHTML = '<td colspan="3">Nenhum evento</td>';

    }
}



function limparNovoEvento(){
    inputNomeEvento.value='';
    inputDataEvento.value= '';  
    inputDataEvento.classList.remove('is-invalid');
    inputNomeEvento.classList.remove('is-invalid');
    divMensagemErro.classList.add('d-none')
    divMensagemErro.innerHTML = '';

}


    function mostrarNovoEvento() {
    novoEvento.classList.remove('d-none');
}

function ocultarNovoevento() {
    novoEvento.classList.add('d-none');
    limparNovoEvento();
}

function novoEventoValido(nomeEvento, dataEvento) {
    var validacaoOk = true;
    var erro= false;
    if (nomeEvento.trim().length === 0) {
        erro = 'O nome do evento eh obrigatorio'
        inputNomeEvento.classList.add('is-invalid');
        validacaoOk = false;
    }else{
        inputNomeEvento.classList.remove('is-invalid');

    }
    var timestampEvento = Date.parse(dataEvento);
    var timestampAtual = (new Date()).getTime();
    if (isNaN(timestampEvento) || timestampEvento < timestampAtual) {
        if (erro.length > 0) {
            erro += '<br> '
        }
        erro += 'A   data do evento eh obrigatorio'
        inputDataEvento.classList.add('is-invalid');
        validacaoOk = false;   
    }else {
        inputDataEvento.classList.remove('is-invalid');
    }

    if (!validacaoOk){
        divMensagemErro.innerHTML = erro;
        divMensagemErro.classList.remove('d-none')
    }else{
        divMensagemErro.classList.add('d-none')
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
window.addEventListener('load', atualizarTabelasEventos);