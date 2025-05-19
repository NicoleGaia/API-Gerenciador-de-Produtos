// Define a URL base da API de produtos
const API_URL = 'http://localhost:3000/produtos';

// Função para buscar e exibir todos os produtos na tabela
async function fetchProdutos() {
  // Faz uma requisição GET para a API
  const res = await fetch(API_URL);
  // Converte a resposta para JSON
  const produtos = await res.json();
  // Seleciona o corpo da tabela onde os produtos serão exibidos
  const tbody = document.getElementById('produtos-tbody');
  // Limpa o conteúdo atual da tabela
  tbody.innerHTML = '';
  // Para cada produto recebido, cria uma linha na tabela
  produtos.forEach(produto => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${produto.id}</td>
      <td>${produto.nome}</td>
      <td>R$ ${produto.preco.toFixed(2)}</td>
      <td class="actions">
        <button style="background-color: #FFFF99; border: 1px solid #919191;" onclick="editarProdutoPrompt(${produto.id}, '${produto.nome}', ${produto.preco})">Editar</button>
        <button style="background-color: #ef4444a9; border: 1px solid #919191;" onclick="removerProduto(${produto.id})">Excluir</button>
      </td>
    `;
    
    // Adiciona a linha na tabela
    tbody.appendChild(tr);
  });
}

// Função para adicionar um novo produto via formulário
async function adicionarProduto(event) {
  event.preventDefault(); // Evita o recarregamento da página ao enviar o formulário
  // Pega os valores dos campos do formulário
  const nome = document.getElementById('nome').value;
  const preco = parseFloat(document.getElementById('preco').value);

  // Envia uma requisição POST para a API com os dados do novo produto
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
  });

  if (res.ok) {
    // Se deu certo, limpa o formulário e atualiza a lista de produtos
    document.getElementById('product-form').reset();
    fetchProdutos();
  } else {
    // Se deu erro, mostra uma mensagem de erro
    const erro = await res.json();
    alert('Erro ao adicionar produto: ' + (erro.mensagem || 'Erro desconhecido'));
  }
}

// Função para remover um produto pelo ID
async function removerProduto(id) {
  // Confirma se o usuário realmente quer excluir
  if (!confirm('Tem certeza que deseja excluir este produto?')) return;
  // Envia uma requisição DELETE para a API
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  // Atualiza a lista de produtos
  fetchProdutos();
}

// Função para editar um produto (abre prompts para novo nome e preço)
async function editarProdutoPrompt(id, nomeAtual, precoAtual) {
  // Pede ao usuário o novo nome
  const nome = prompt('Novo nome do produto:', nomeAtual);
  if (nome === null) return; // Se cancelar, não faz nada
  // Pede ao usuário o novo preço
  const preco = parseFloat(prompt('Novo preço:', precoAtual));
  if (isNaN(preco)) {
    alert('Preço inválido!');
    return;
  }
  // Envia uma requisição PUT para a API com os novos dados
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, preco })
  });
  if (res.ok) {
    // Se deu certo, atualiza a lista de produtos
    fetchProdutos();
  } else {
    // Se deu erro, mostra uma mensagem de erro
    const erro = await res.json();
    alert('Erro ao editar produto: ' + (erro.mensagem || 'Erro desconhecido'));
  }
}

// Adiciona o evento de submit ao formulário para chamar a função de adicionar produto
document.getElementById('product-form').addEventListener('submit', adicionarProduto);

// Ao carregar a página, busca e exibe todos os produtos
fetchProdutos();