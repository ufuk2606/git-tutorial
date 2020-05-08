
const http = require('http');
const   matematikIslemleri    = require('./DortIslem')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200 ;
    res.setHeader('Content-Teyp', 'text/plain');
    res.end(`${matematikIslemleri.toplama( 4, 4)}`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});