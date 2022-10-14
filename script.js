const prato = document.querySelector('.pratos')
const bebida = document.querySelector('.bebidas')
const sobremesa = document.querySelector('.sobremesas')
let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;

function selecionarPrato(x) {
    pratoSelecionado = prato.querySelector('.selecionado')
    if (pratoSelecionado) {
        pratoSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
    }
}

function selecionarBebida(x) {
    bebidaSelecionado = bebida.querySelector('.selecionado')
    if (bebidaSelecionado) {
        bebidaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
    }
}

function selecionarSobremesa(x) {
    sobremesaSelecionado = sobremesa.querySelector('.selecionado')
    if (sobremesaSelecionado) {
        sobremesaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
    }
}

function finalizarPedido() {
    if (o) {

    }
}