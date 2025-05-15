const a = [1, 2, 3];
const b = [4, 5, 6];

const c = [...a, ...b];

console.log(c); // [1, 2 ,3, 4, 5, 6]

// 객체 병합

const car = {
    modelName : '그렌져',
    year: 2025,
};

const phone = {
    modelName : '아이폰 15',
    weight : 10,
}

const merge = {...car, ...phone};

// 키값이 같다면 나중에 스프레드한 객체로 덮음
console.log(merge); // { modelName: '아이폰 15', year: 2025, weight: 10 }

