export const name = "Deve criar um produto com sucesso";
export const request = {
    method: "POST",
    url: "/produtos",
    body: {
        nome: "Produto Teste",
        preco: 99.99
    }
};
export const response = {
    status: 201,
    body: {
        id: "*",
        nome: "Produto Teste",
        preco: 99.99
    }
};
