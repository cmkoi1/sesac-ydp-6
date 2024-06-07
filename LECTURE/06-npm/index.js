// const http = require('http');
// console.log(http);

// http 모듈이 가지고 있는 서버를 만드는 기능 사용
// const server = http.createServer();

// server.listen(8080, function(){
//     console.log('8080번 포트로 서버 실행');
// })

const http = require('http');
const server = http.createServer();
// console.log(server);

server.listen(8080, function(){
    console.log('8080번 포트로 서버 실행');
})