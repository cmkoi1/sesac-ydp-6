// 직접 코드 쳐 보기 실습
const path = require('path');
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'text'), (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('파일 생성');
    }
})
fs.rmdir(path.join(__dirname, 'text'), (err) => {
    if(err) {
        console.error(err);
    } else {
        console.log('파일 생성');
    }
})