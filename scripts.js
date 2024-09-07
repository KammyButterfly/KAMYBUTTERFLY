// Função de busca
document.querySelector('.search-bar button').addEventListener('click', function() {
    let query = document.querySelector('.search-bar input').value;
    if (query) {
        alert('Você buscou por: ' + query);
        // Aqui você pode implementar uma busca real ou redirecionar o usuário para uma página de resultados
    } else {
        alert('Digite algo para buscar.');
    }
});

function performSearch() {
    const query = document.getElementById('searchInput').value;
    
    // Lógica de busca (substitua com o mecanismo real de busca)
    if(query) {
        document.getElementById('searchResults').innerHTML = 'Você pesquisou por: ' + query;
    } else {
        document.getElementById('searchResults').innerHTML = 'Por favor, insira um termo para busca.';
    }
}
// Função de adicionar ao carrinho
let carrinho = [];

function adicionarAoCarrinho(nomeProduto, preco) {
    carrinho.push({ produto: nomeProduto, preco: preco });
    alert(nomeProduto + ' foi adicionado ao carrinho.');
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let total = carrinho.reduce((acc, item) => acc + item.preco, 0);
    document.querySelector('#carrinho').textContent = 'Carrinho: ' + carrinho.length + ' itens - Total: R$ ' + total.toFixed(2);
}

// Atribuir evento aos botões de compra
document.querySelectorAll('.produto-item button').forEach(function(button, index) {
    button.addEventListener('click', function() {
        let nomeProduto = document.querySelectorAll('.produto-item h3')[index].textContent;
        let precoProduto = parseFloat(document.querySelectorAll('.produto-item span')[index].textContent.replace('R$', '').replace(',', '.'));
        adicionarAoCarrinho(nomeProduto, precoProduto);
    });
});
