const http = require('http');

http.createServer((req, res) => {
    var _url = req.url;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<h2>Hello jimin</h2>`);
    res.end(`<p>${_url}</p>`)

}).listen(3000, () => {
    console.log('3000포트 실행');
})