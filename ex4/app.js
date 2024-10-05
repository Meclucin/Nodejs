const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname.split('/');

    if (path[1] === 'saudacao' && path[2]) {
        const nome = path[2];
        res.writeHead(200);
        res.end(`Olá, ${nome.charAt(0).toUpperCase() + nome.slice(1)}!`);
    } else {
        res.writeHead(404);
        res.end("Página não encontrada");
    }
};

const server = http.createServer(requestListener);
server.listen(3000, 'localhost', () => {
    console.log("Servidor está rodando em http://localhost:3000");
});