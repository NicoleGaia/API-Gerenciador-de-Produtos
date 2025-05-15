const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const { validarProduto } = require('../middlewares/validationMiddleware');

// Rotas da API de produtos
router.get('/', controller.listarProdutos);
router.get('/:id', controller.buscarProduto);
router.post('/', validarProduto, controller.criarProduto);
router.put('/:id', validarProduto, controller.editarProduto);
router.delete('/:id', controller.excluirProduto);

module.exports = router;