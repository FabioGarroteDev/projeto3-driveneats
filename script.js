const prato = document.querySelector('.pratos')
const bebida = document.querySelector('.bebidas')
const sobremesa = document.querySelector('.sobremesas')
let pratoPreco;
let bebidaPreco;
let sobremesaPreco;
let pratoEscolhido;
let bebidaEscolhido;
let sobremesaEscolhido;
let pratoSelecionado;
let bebidaSelecionado;
let sobremesaSelecionado;

function selecionarPrato(x) {
    if (pratoSelecionado) {
        pratoSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
        pratoSelecionado = prato.querySelector('.selecionado')
    } else {
        x.classList.add('selecionado')
        pratoSelecionado = prato.querySelector('.selecionado')
    }
    pratoPreco = pratoSelecionado.querySelector('span')
    pratoPreco = Number(pratoPreco.innerHTML)
    pratoEscolhido = pratoSelecionado.querySelector('p')
    pratoEscolhido = pratoEscolhido.innerHTML
    finalizarPedido()
}

function selecionarBebida(x) {
    if (bebidaSelecionado) {
        bebidaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
        bebidaSelecionado = bebida.querySelector('.selecionado')
    } else {
        x.classList.add('selecionado')
        bebidaSelecionado = bebida.querySelector('.selecionado')
    }
    bebidaPreco = bebidaSelecionado.querySelector('span')
    bebidaPreco = Number(bebidaPreco.innerHTML)
    bebidaEscolhido = bebidaSelecionado.querySelector('p')
    bebidaEscolhido = bebidaEscolhido.innerHTML
    finalizarPedido()
}

function selecionarSobremesa(x) {
    if (sobremesaSelecionado) {
        sobremesaSelecionado.classList.remove('selecionado')
        x.classList.add('selecionado')
        sobremesaSelecionado = sobremesa.querySelector('.selecionado')
    } else {
        x.classList.add('selecionado')
        sobremesaSelecionado = sobremesa.querySelector('.selecionado')
    }
    sobremesaPreco = sobremesaSelecionado.querySelector('span')
    sobremesaPreco = Number(sobremesaPreco.innerHTML)
    sobremesaEscolhido = sobremesaSelecionado.querySelector('p')
    sobremesaEscolhido = sobremesaEscolhido.innerHTML
    finalizarPedido()
}

function finalizarPedido() {
    const finalizar = document.querySelector('button')
    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        finalizar.classList.add('verde')
        finalizar.innerHTML = 'Fechar pedido'
    }
}

function fazerPedido() {
    let valorTotal = pratoPreco + bebidaPreco + sobremesaPreco
    valorTotal = valorTotal.toFixed(2)
    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        const nome = prompt('Qual o seu nome?')
        const endereco = prompt('Qual o seu endereço?')
        const mensagem = `Olá, gostaria de fazer o pedido:
        - Prato: ${pratoEscolhido} 
        - Bebida: ${bebidaEscolhido} 
        - Sobremesa: ${sobremesaEscolhido} 
        Total: R$ ${valorTotal}
        
        Nome: ${nome}
        Endereço: ${endereco}`
        const url = `https://wa.me/5511964287262?text=${encodeURIComponent(mensagem)}`;
        window.open(url);
    }
}



