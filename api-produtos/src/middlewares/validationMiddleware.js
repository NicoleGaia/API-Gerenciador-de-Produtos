//Função: Contém funções intermediárias que processam a requisição antes de chegar ao controller.
//Valida os dados enviados pelo cliente (ex: se o nome e preço do produto são válidos).
//Se os dados estiverem errados, retorna erro antes de chegar ao controller.


// Middleware para validar os dados do produto
export function validarProduto(req, res, next) {
  // Função para validar um único produto
  function validar(produto) {
    if (!produto.nome || typeof produto.nome !== 'string') {
      return false;
    }
    if (produto.preco === undefined || typeof produto.preco !== 'number' || produto.preco < 0) {
      return false;
    }
    return true;
  }

  if (Array.isArray(req.body)) {
    // Se for array, valida todos
    for (const produto of req.body) {
      if (!validar(produto)) {
        return res.status(400).json({ mensagem: 'Nome do produto é obrigatório e deve ser uma string, e preço deve ser um número positivo.' });
      }
    }
  } else {
    // Se for objeto único
    if (!validar(req.body)) {
      return res.status(400).json({ mensagem: 'Nome do produto é obrigatório e deve ser uma string, e preço deve ser um número positivo.' });
    }
  }

  next();
}