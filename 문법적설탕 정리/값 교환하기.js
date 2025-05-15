// swap 방식
let a = 5;
let b = 10;

let temp;

temp = a;
a = b;
b = temp;

console.log(a, b);

// 구조 분해 할당
let c = 1;
let d = 2;

[d, c] = [c, d];

console.log(c, d);
