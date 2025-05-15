// 리터럴 
const arr = [0, 0, 0, 0, 0, 0];

// 배열 생성자를 이용
const arr1 = new Array(6);
console.log(arr1); // [undefined, undefined, undefined, undefined, undefined, undefined]

const arr2 = [...new Array(6)].map((_, i) => i + 1); // [1, 2, 3, 4, 5, 6]

console.log(arr2);

// Array.fill() 함수 이용
const arr3 = new Array(6).fill(0);

console.log(arr3); // [0, 0, 0, 0, 0, 0]

// 2차열 배열 fill() 함수로 만들어보기
const arr4 = [...new Array(5)].map((_, i) => new Array(4).fill(i));

console.log(arr4);