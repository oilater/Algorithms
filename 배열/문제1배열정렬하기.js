// 자바스크립트 엔진 최적화로 sort()의 시간복잡도는 O(nlogn)이다. n^2 아님
function solution(arr) {
    const uniques = [... new Set(arr)];
  return uniques.sort((a, b) => b - a);
}

console.log(solution([1, -5, 2, 4, 3])); // [-5, 1, 2, 3, 4]
console.log(solution([2, 1, 1, 3, 2, 5, 4])); // [1, 1, 2, 2, 3, 4, 5]
console.log(solution([1, 6, 7])); // [1, 6, 7]