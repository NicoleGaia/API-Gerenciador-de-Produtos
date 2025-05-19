//Função: É o ponto de entrada da aplicação. Inicializa o Express, 
// configura middlewares globais, importa e usa as rotas, 
// e inicia o servidor na porta definida.


// Importa o Express
import express, { json } from 'express';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

const app = express();

// Habilita CORS para todas as rotas
app.use(cors());

// Middleware para interpretar JSON
app.use(json());

// Usa as rotas de produtos
app.use('/produtos', productRoutes);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('API de Produtos rodando na porta 3000');
});

