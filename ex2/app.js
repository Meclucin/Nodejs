const http = require('http');
const fs = require('fs');
const path = require('path');

const requestListener = function (req, res) {
    if (req.url === "/") {
        fs.readFile(path.join(__dirname, "index.html"), function (err, data) {
            if (err) {
                res.writeHead(500);
                res.end("Erro no servidor");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url === "/sobre") {
        res.writeHead(200);
        res.end("Meu nome é Lucas Martins Kaminski.");
    } else if (req.url === "/contato") {
        res.writeHead(200);
        res.end("Contato: lmartinskaminski@gmail.com");
    } else if (req.url === "/style.css") {
        fs.readFile(path.join(__dirname, "style.css"), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end("Erro ao carregar o CSS");
            } else {
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(3000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:3000");
});