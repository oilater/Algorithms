let arr = [1, 2, 3];

arr = arr.concat([4, 5]);

console.log(arr);


let arr2 = [1, 2, 3];

arr2 = [...arr2, ...[4, 5]];

arr2.unshift(0); // 맨 앞에 0 추가

console.log(arr2);

// 배열 중간에 데이터 추가

arr2.splice(2, 0, 99);

console.log(arr2);

const arr3 = [1, 2, 3, 4 ,5];

// splice로 중간 데이터 삭제 splice(start index, delete count)
const removeElements = arr3.splice(2, 2);

console.log(arr3);
console.log(removeElements); // 삭제한 데이터 배열로 반환
