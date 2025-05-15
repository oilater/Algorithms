// 배열의 구조분해 할당

const arr = ['Hello', 'Javascript', '!'];

const [first , second ] = arr;

console.log(first, second); // Hello Javascript


// 객체의 구조분해 할당

const obj = {
    name: '김성현',
    age: 31,
}

const {age} = obj;

console.log(age);

const {name : author} = obj; // 다른 이름으로 할당 받기

console.log(author);
