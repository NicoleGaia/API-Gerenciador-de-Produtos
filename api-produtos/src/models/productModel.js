//Função: Responsável pela manipulação dos dados (simula um banco de dados em memória)
//Funções para listar, buscar, criar, editar e excluir produtos.
//Não sabe nada sobre HTTP, só manipula dados.

// Simula um banco de dados em memória
let produtos = [];
let idAtual = 1;

// Função para listar todos os produtos
function listar() {
  return produtos;
}

// Função para buscar um produto por ID
function buscarPorId(id) {
  return produtos.find(p => p.id === id);
}

// Função para criar um novo produto
function criar(produto) {
  produto.id = idAtual++;
  produtos.push(produto);
  return produto;
}

// Função para editar um produto existente
function editar(id, dados) {
  const produto = buscarPorId(id);
  if (produto) {
    Object.assign(produto, dados);
    return produto;
  }
  return null;
}

// Função para excluir um produto
function excluir(id) {
  const index = produtos.findIndex(p => p.id === id);
  if (index !== -1) {
    produtos.splice(index, 1);
    return true;
  }
  return false;
}

export { listar, buscarPorId, criar, editar, excluir };