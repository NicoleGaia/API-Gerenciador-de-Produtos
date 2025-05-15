const Product = require('../models/productModel');

// Lista todos os produtos
exports.listarProdutos = (req, res) => {
  res.json(Product.listar());
};

// Busca um produto por ID
exports.buscarProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = Product.buscarPorId(id);
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.json(produto);
};

// Cria um novo produto
exports.criarProduto = (req, res) => {
  const novoProduto = Product.criar(req.body);
  res.status(201).json(novoProduto);
};

// Edita um produto existente
exports.editarProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const produtoEditado = Product.editar(id, req.body);
  if (!produtoEditado) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.json(produtoEditado);
};

// Exclui um produto
exports.excluirProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const excluido = Product.excluir(id);
  if (!excluido) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.status(204).send();
};