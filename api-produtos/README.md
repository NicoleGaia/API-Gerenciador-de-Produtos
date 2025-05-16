# API de Gerenciamento de Produtos

## Objetivo

Esta API tem como objetivo gerenciar produtos de forma simples, permitindo operações de criação, listagem, edição e exclusão de produtos. É ideal para estudos, prototipagem ou como base para sistemas maiores.

---

## Funcionalidades

- **Criar produto** (individual ou múltiplos)
- **Listar todos os produtos**
- **Buscar produto por ID**
- **Editar produto**
- **Excluir produto**

---

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- JavaScript ES Modules
- Thunder Client (para testes)
- Armazenamento em memória (não persistente)

---

## Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd api-produtos

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Adicione `"type": "module"` ao seu `package.json`:**
   ```json
   {
     "type": "module"
     // ...demais configurações
   }
   ```

4. **Inicie a API:**
   ```bash
   node src/app.js
   ```

---

## Endpoints

### 1. Listar todos os produtos

- **GET** `/produtos`
- **Resposta:**
  ```json
  [
    {
      "id": 1,
      "nome": "Produto 1",
      "preco": 10.0
    }
  ]
  ```

---

### 2. Buscar produto por ID

- **GET** `/produtos/{id}`
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "nome": "Produto 1",
    "preco": 10.0
  }
  ```
- **Resposta se não encontrado:**
  ```json
  {
    "mensagem": "Produto não encontrado"
  }
  ```

---

### 3. Criar produto (um ou vários)

- **POST** `/produtos`
- **Body (um produto):**
  ```json
  {
    "nome": "Produto Novo",
    "preco": 99.99
  }
  ```
- **Body (vários produtos):**
  ```json
  [
    { "nome": "Produto 1", "preco": 10.0 },
    { "nome": "Produto 2", "preco": 20.0 }
  ]
  ```
- **Resposta:**
  ```json
  {
    "id": 2,
    "nome": "Produto Novo",
    "preco": 99.99
  }
  ```
  ou
  ```json
  [
    { "id": 3, "nome": "Produto 1", "preco": 10.0 },
    { "id": 4, "nome": "Produto 2", "preco": 20.0 }
  ]
  ```

---

### 4. Editar produto

- **PUT** `/produtos/{id}`
- **Body:**
  ```json
  {
    "nome": "Produto Editado",
    "preco": 123.45
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "id": 1,
    "nome": "Produto Editado",
    "preco": 123.45
  }
  ```
- **Resposta se não encontrado:**
  ```json
  {
    "mensagem": "Produto não encontrado"
  }
  ```

---

### 5. Excluir produto

- **DELETE** `/produtos/{id}`
- **Resposta de sucesso:**  
  Status: 204 No Content
- **Resposta se não encontrado:**
  ```json
  {
    "mensagem": "Produto não encontrado"
  }
  ```

---

## Exemplos de Teste com Thunder Client

### Criar produto

- **Método:** POST
- **URL:** `http://localhost:3000/produtos`
- **Body:**
  ```json
  {
    "nome": "Produto Teste",
    "preco": 50.0
  }
  ```

### Listar produtos

- **Método:** GET
- **URL:** `http://localhost:3000/produtos`

### Editar produto

- **Método:** PUT
- **URL:** `http://localhost:3000/produtos/1`
- **Body:**
  ```json
  {
    "nome": "Produto Atualizado",
    "preco": 75.0
  }
  ```

### Excluir produto

- **Método:** DELETE
- **URL:** `http://localhost:3000/produtos/1`

---

## Observações

- Os dados são armazenados apenas em memória. Ao reiniciar o servidor, todos os produtos cadastrados serão perdidos.
- Para testes automatizados, utilize Thunder Client ou Isonomia.