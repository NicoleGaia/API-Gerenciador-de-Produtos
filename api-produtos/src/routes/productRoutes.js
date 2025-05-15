import { Router } from 'express';
const router = Router();
import { listarProdutos, buscarProduto, criarProduto, editarProduto, excluirProduto } from '../controllers/productController';
import { validarProduto } from '../middlewares/validationMiddleware';

// Rotas da API de produtos
router.get('/', listarProdutos);
router.get('/:id', buscarProduto);
router.post('/', validarProduto, criarProduto);
router.put('/:id', validarProduto, editarProduto);
router.delete('/:id', excluirProduto);

export default router;