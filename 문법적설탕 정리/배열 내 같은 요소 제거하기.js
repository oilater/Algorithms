const names = ['성현', 'Kim', 'Lee', '성현', '수연'];

const uniqueNames = [...new Set(names)];

console.log(uniqueNames); // [ '성현', 'Kim', 'Lee', '수연' ]
