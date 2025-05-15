const numbers = [1, 2, 3, 4, 5];

// map(element, index, array)
const squares = numbers.map((v, i, array) => {
    console.log('element: ' + v, 'index : ' + i);
    console.log(array);

    return v * v
});

console.log(squares);

// filter (원하는 조건에 해당하는 값만 남길 수 있음)

const nums = [1, 2, 3, 4, 5];
const evens = nums.filter(num => num % 2 == 0);

console.log(evens);

// reduce : 전체 합

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArr = arr.reduce((acc, val) => {
    const lastSum = acc.length != 0 ? acc[acc.length - 1] : 0;
    acc.push(lastSum + val);
    return acc;
}, []);



const sum = arr.reduce(a, b => a + b);

