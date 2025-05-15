/**
 * 정수 배열 numbers가 주어집니다. 
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 
 * 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 * 
 * numbers의 길이는 2 이상 100 이하입니다.
 * numbers의 모든 수는 0 이상 100 이하입니다.
 * 
 * N^2도 가능 (10,000)
 * 
 * 풀이 전략
 * 하나하나 더해서 새로운 배열에 저장한다.
 * 뭐랑 더할건데 ? 
 * 
 * 각 인덱스에서 자신을 제외한 나머지 값들과 더해서 저장한다.
 * 
 * map으로 돌면서 더해봄
 * 
 * 중복값을 제거한다.
 * 
 */

function solution(numbers) {
    var answer = [];

    numbers.forEach((v, i) => {
        numbers.forEach((a, b) => {
            if (i < b ) {
                answer.push(v + a);
            }
        })
    })

    answer = [...new Set(answer)].sort((a, b) => a - b);

    return answer;
}


console.log(solution([2,1,3,4,1])); // [2,3,4,5,6,7]
console.log(solution([5,0,2,7])); // [2,5,7,9,12]