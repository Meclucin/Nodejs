const http = require('http');

const requestListener = function (req, res) {
    if (req.url === "/") {
        res.writeHead(200);
        res.end("Seja Bem-vindo a minha página!");
    } else {
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(3000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:3000");
});