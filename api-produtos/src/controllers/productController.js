import { listar, buscarPorId, criar, editar, excluir } from '../models/productModel.js';

// Lista todos os produtos
export function listar(req, res) {
  res.json(listar());
}

// Busca um produto por ID
export function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const produto = buscarPorId(id);
  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.json(produto);
}

// Cria um novo produto
export function criar(req, res) {
  const novoProduto = criar(req.body);
  res.status(201).json(novoProduto);
}

// Edita um produto existente
export function editar(req, res) {
  const id = parseInt(req.params.id);
  const produtoEditado = editar(id, req.body);
  if (!produtoEditado) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.json(produtoEditado);
}

// Exclui um produto
export function excluir(req, res) {
  const id = parseInt(req.params.id);
  const excluido = excluir(id);
  if (!excluido) {
    return res.status(404).json({ mensagem: 'Produto não encontrado' });
  }
  res.status(204).send();
}