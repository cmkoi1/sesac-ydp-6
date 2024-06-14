const fs = require('fs');
// console.log(fs);
// mkdir: fs.mkdir(path, mode, callback); 형태로 사용.
const path = require('path');

// 디렉토리 생성
// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
//     if(err){
//         return console.error(err);
//     }
//     console.log('디렉토리 생성');
// });

// 디렉토리 삭제
// fs.rmdir(path.join(__dirname, 'test'), (err)=>{
//     if(err){
//         return console.error(err);
//     }
//     console.log('디렉토리 삭제 완료');
// });

// 디렉토리 읽기
const fs = require('fs');
fs.readdir('./', function(err, files){
    if(err) console.log("에러", err);
    else console.log("결과는", files);
})
