// function call(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const user = name;
//             resolve(user);
//         }, 1000);
//     })
// }

// function back() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const backContent = 'back';
//             resolve(backContent);
//         }, 1000)
//     })
// }

// function hell() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             const hellContent = 'callback hell';
//             resolve(hellContent)
//         }, 1000);
//     })
// }

// call('kim', function (name) {
//     console.log(name + '반가워');
//     back(function (txt) {
//         console.log(txt + '을 실행했구나');
//         hell(function (message) {
//             console.log('여기는' + message);
//         });
//     });
// });


// call('kim').then((user) => {
//     console.log(user + ' 반가워');
//     return back();
// }).then((backContent) => {
//     console.log(backContent + '을 실행했구나');
//     return hell();
// }).then((hellContent) => {
//     console.log('여기는 ' + hellContent);
// })

// async function exec() {
//     try {
//         let user = await call("kim");
//         console.log(user + ' 반가워');
//         let backs = await back();
//         console.log(backs + '을 실행했구나');
//         let hells = await hell();
//         console.log('여기는 ' + hells);
//     } catch (err){
//         console.log(err);
//     }
// }
// exec();


function backColor(color) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            // document.body.style.backgroundColor = color;
            console.log(`Background color changed to: ${color}`);
            resolve(color)
        }, 1000)
    })
}

async function changeColor() {
    try {
        await backColor('red');
        await backColor('orange');
        await backColor('yellow');
        await backColor('green');
        await backColor('blue');

    } catch(err) {
        console.log(err);
    }
}

changeColor();
