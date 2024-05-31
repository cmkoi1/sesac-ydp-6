// 배열에서 반복문 사용하기
// - 기본 for문
// - for of문
// - forEach() 메서드

// 배열) for문 사용 이유
const fruits = ['사과', '배', '포도', '망고', '바나나'];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

for(let f = 0; f< fruits.length; f++){
    console.log(fruits[f]);
}
console.log('----------------------');

// ex)
const arr = [1, 2, 5, 6, 7];
const alphabets = ['a', 'b', 'c', 'd'];


// #1. 기본 for문
for (let a = 0; a<arr.length; a++){
    console.log(arr[a]);
}
console.log('----------------------');

// #2. for...of 반복문
// 이 반복문은 배열의 요소를 직접 참조하므로 인덱스를 사용할 필요가 x
// 순서가 있는 구조 반복에 적합
// 배열 'alphabets'의 각 요소를 반복하면서 'alpha' 변수에 순서대로 할당하고, 각각 요소에 대해 반복문 블록 실행

for(let alpha of alphabets){
    console.log('alpha > ', alpha);
}
console.log('----------------------');

// #3. forEach() 메서드
// 배열의 각 요소에 대해 지정된 함수를 실행
// 일반적으로 배열을 순회하면서 각 요소에 대해 동일한 작업을 수행할 때 사용
// 각 요소에 대해 함수가 호출될 때마다, 해당 요소가 함수의 인자로 전달된다

alphabets.forEach(function (alpha, idx, arr) {
    // alpha: currentValue를 의미. 반복하고 있는 현재 요소
    // idx: currentValue의 인덱스(위치)
    // arr: forEach를 호출한 배열
    console.log(alpha, idx, arr);
});
console.log('----------------------');


// ** 참고) 배열의 합 3가지 방법
// let numbers2 = [1, 2, 3, 4, 5, 6];
// var sum1 = 0;
// var sum2 = 0;
// var sum3 = 0;

// for (let i = 0; i < numbers2.length; i++) {
//   console.log(numbers2[i]);
//   sum1 = sum1 + numbers2[i];
// }

// for (let num of numbers2) {
//   sum2 = sum2 + num;
// }

// numbers2.forEach((num) => {
//   sum3 = sum3 + num;
// });

// console.log(sum1, sum2, sum3);
console.log('---------------');


// map, filter, find aptjem
// - 조건에 따라 요소를 변형하거나 선택.
// #1. map()
// - 배열을 순회하면서 각 요소에 대해 지정된 함수를 호출하고(함수를 배열의 각 요소마다 적용시킨다), 그 결과로 새로운 배열을 생성

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function(num){ // 함수가 인수로 전달된다?? num은 매개변수(배열의 각 요소를 하나씩 가져오는 것.)
    return num * 2;
}) 
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

// #2. filter()
// - 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과가 'true'인 요소들로 이루어진 새로운 배열 생성

const pracNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
})
console.log(pracNumbers); // [2, 4]

// #3. find()
// - 조건을 만족하는 첫 번째 요소 찾기.
// - 조건에 만족 -> 해당 요소 반환
// - 조건에 불만족 -> undefined 반환

const pracNumbers2 = numbers.find(function(num) {
    return num % 2 === 0;
})
console.log(pracNumbers2); // 2

// + 옵션) for in 반복문
// 객체에 key를 반복할 수 있는 구문

const dog = {
    name: '태풍',
    gender: 'M',
    info: 'cute'
}; // (key, value)

for(let key in dog){
    console.log(key, dog[key]); // 객체의 각 속성(key, value)에 대해 실행할 코드
    // key: key
    // value: dog[key]
}

// 참고)
// 변수 = key = 각 속성의 키를 저장하는 변수
// 객체 = dog = 속성을 반복할 객체