// Variáveis globais para facilitar a vida
let valorTotal = 0; 
let campoTotal = document.getElementById('valor-total');
let listaDoCarrinho = document.getElementById('lista-produtos');
//Limpando o campo da lista do carrinho e o campo total
limpar()

function adicionar(){
    // Recuperar nome do produto, quantidade e valor do produto
    let quantidade = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value; 
    let partes = produto.split('-'); 
    let nomeProduto = partes[0].trim(); 
    let valorProduto = parseFloat(partes[1].trim().split('R$')[1]); 
    // Verificando se a quantidade é válida
    if(quantidade<1){
        alert('Quantidade Inválida!');
        return;
    }
    // Calcular o sub-total valor do produto * qtd.
    let subTotal = valorProduto * quantidade;
    // Adicionar no carrinho
    listaDoCarrinho.insertAdjacentHTML('beforeend', `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span></section>`);
    // Atualizar o valor total
    valorTotal += subTotal;
    campoTotal.innerHTML = `R$${valorTotal}`;
    // Limpar campo quantidade
    limparQuantidade();
}
function limpar(){
    // Limpar Campo quantidade
    limparQuantidade();
    // Limpar Lista do Carrinho
    listaDoCarrinho.innerHTML = '';
    // Limpar total
    valorTotal = 0;
    campoTotal.innerHTML = 'R$ 0';

}

function limparQuantidade(){
    document.getElementById('quantidade').value = '';
}
