//Função: Define os endpoints da API e qual controller será chamado para cada rota.
//Exemplo: Quando chega um GET em /produtos, chama o controller para listar produtos.

import { Router } from 'express';
const router = Router();
import { listarProdutos, buscarProduto, criarProduto, editarProduto, excluirProduto } from '../controllers/productController.js';
import { validarProduto } from '../middlewares/validationMiddleware.js';

// Rotas da API de produtos
router.get('/', listarProdutos);
router.get('/:id', buscarProduto);
router.post('/', validarProduto, criarProduto);
router.put('/:id', validarProduto, editarProduto);
router.delete('/:id', excluirProduto);

export default router;