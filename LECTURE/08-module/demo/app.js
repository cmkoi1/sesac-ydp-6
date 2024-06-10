const http = require('http');
const fs = require('fs');
const url = require('url');

// 127.0.0.1:3000 포트로 접속해서 winter.html, summer.html 띄워주기
http.createServer(function (req, res) {
    // req에 사용자가 원하는 파일을 가지고 있어야 한다.
    var q = url.parse(req.url, true);
    var filename = '.' + q.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('File not found')
        }
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data);
        return res.end();
    })

}).listen(3000, () => {
    console.log("서버 실행");
})