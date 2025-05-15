// Importa o Express
import express, { json } from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();

// Middleware para interpretar JSON
app.use(json());

// Usa as rotas de produtos
app.use('/produtos', productRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('API de Produtos rodando na porta 3000');
});