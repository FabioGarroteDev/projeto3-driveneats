const prato = document.querySelector('.pratos')
const bebida = document.querySelector('.bebidas')
const sobremesa = document.querySelector('.sobremesas')
let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;

function selecionarPrato(x) {
    if (pratoSelecionado) {
        pratoSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
        pratoSelecionado = prato.querySelector('.selecionado')
    }
    finalizarPedido()
}

function selecionarBebida(x) {
    if (bebidaSelecionado) {
        bebidaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
        bebidaSelecionado = bebida.querySelector('.selecionado')
    }
    finalizarPedido()
}

function selecionarSobremesa(x) {
    if (sobremesaSelecionado) {
        sobremesaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
    } else {
        x.classList.add('selecionado')
        sobremesaSelecionado = sobremesa.querySelector('.selecionado')
    }
    finalizarPedido()
}

function finalizarPedido() {
    const finalizar = document.querySelector('button')
    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        finalizar.classList.add('verde')
        finalizar.innerHTML = 'Fechar pedido'
    }
}



