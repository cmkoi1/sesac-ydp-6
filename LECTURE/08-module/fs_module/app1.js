const fs = require('fs');

// 파일 생성
fs.writeFile('mynewFile.txt', 'Hello world', function(err){
    if(err) throw err;
    else console.log('파일 생성');
})

// open(), w를 이용해서 파일 생성(내용 없는 빈 파일 생성).
fs.open('mynewFile2.text', 'w', function(err, file){
    if(err) throw err;
    console.log('파일 생성');
})

// appendFile(): 기존 파일에 내용 추가
fs.appendFile('mynewFile1.txt', 'kim', function(err){
    if(err) throw err;
    console.log('파일 내용 추가');
})

// 파일 삭제
fs.unlink('mynewfile2.txt', function(){
    console.log('파일 삭제');
})


// 파일 이름 변경
// fs.rename('mynewFile1.txt', 'renameFile1.txt', function(err){
//     if(err) throw err;
//     console.log('파일 이름 변경');
// })

// 파일 읽기
// fs.readFile('./input.txt', 'utf-8', function(err, data){
//     console.log(data);
// })
// console.log('파일 읽기');

// fs.readFile('./input.txt', function(err, data){
//     console.log(data);
// })
// console.log('파일 읽기');

const data = fs.readFileSync('./input.txt', 'utf-8');
console.log(data);
console.log('파일 읽기 완료');