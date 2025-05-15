// Middleware para validar os dados do produto
exports.validarProduto = (req, res, next) => {
  const { nome, preco } = req.body;

  // Verifica se o nome foi informado e é uma string
  if (!nome || typeof nome !== 'string') {
    return res.status(400).json({ mensagem: 'Nome do produto é obrigatório e deve ser uma string.' });
  }

  // Verifica se o preço foi informado e é um número positivo
  if (preco === undefined || typeof preco !== 'number' || preco < 0) {
    return res.status(400).json({ mensagem: 'Preço do produto é obrigatório e deve ser um número positivo.' });
  }

  next();
};