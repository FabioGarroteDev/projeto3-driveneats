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
    const finalizar = document.querySelector('.fechar-pedido button')
    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        finalizar.classList.add('verde')
        finalizar.innerHTML = 'Fechar pedido'
    }
}

function revisarPedido() {
    let valorTotal = pratoPreco + bebidaPreco + sobremesaPreco
    valorTotal = valorTotal.toFixed(2)
    const opaco = document.querySelector('.fundo-opaco')
    const revisar = document.querySelector('.card-flutuante')
    const nomePrato = revisar.querySelector('.valores div p')
    const valorPrato = revisar.querySelector('.valores div h3')
    const nomeBebida = revisar.querySelector('.valores div:nth-child(2) p')
    const valorBebida = revisar.querySelector('.valores div:nth-child(2) h3')
    const nomeSobremesa = revisar.querySelector('.valores div:nth-child(3) p')
    const valorSobremesa = revisar.querySelector('.valores div:nth-child(3) h3')
    const total = revisar.querySelector('.valores div:nth-child(4) h3')
    let pratoPrecoFixed = Number(pratoPreco)
    pratoPrecoFixed = pratoPrecoFixed.toFixed(2)
    let bebidaPrecoFixed = Number(bebidaPreco)
    bebidaPrecoFixed = bebidaPrecoFixed.toFixed(2)
    let sobremesaPrecoFixed = Number(sobremesaPreco)
    sobremesaPrecoFixed = sobremesaPrecoFixed.toFixed(2)
    if (pratoSelecionado && bebidaSelecionado && sobremesaSelecionado) {
        opaco.classList.remove('escondido')
        revisar.classList.remove('escondido')
    }
    nomePrato.innerHTML = pratoEscolhido
    valorPrato.innerHTML = pratoPrecoFixed
    nomeBebida.innerHTML = bebidaEscolhido
    valorBebida.innerHTML = bebidaPrecoFixed
    nomeSobremesa.innerHTML = sobremesaEscolhido
    valorSobremesa.innerHTML = sobremesaPrecoFixed
    total.innerHTML = valorTotal
}

function fazerPedido() {
    let valorTotal = pratoPreco + bebidaPreco + sobremesaPreco
    valorTotal = valorTotal.toFixed(2)
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

function cancelar() {
    const fechar = document.querySelector('.card-flutuante')
    const sairFundo = document.querySelector('.fundo-opaco')
    fechar.classList.add('escondido')
    sairFundo.classList.add('escondido')
}



