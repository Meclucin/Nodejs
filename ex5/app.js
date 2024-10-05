const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir arquivos estáticos (CSS e HTML)
app.use(express.static(path.join(__dirname))); // Serve arquivos na raiz do diretório

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para a API que retorna dados em JSON
app.get('/api/data', (req, res) => {
    const data = {
        nome: "Lucas Martins Kaminski",
        idade: 20,
        profissao: "Estudante de Engenharia de Software",
        interesses: ["Jogos", "Séries", "E-commerce"]
    };
    res.json(data);
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});