/**
 * 참가자들을 돌면서
 * 어떤 스테이지까지 올라갔는지 체크해준다.
 * 
 * 가장 작은 숫자의 스테이지부터 나열
 * 
 * 
 */

function solution(N, stages) {
    var ret = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        for (let j = 1; j < stages.length; j++) {
            ret[i] += 1;
        }
    }

    console.log(ret);
    
    // [1, 3, 2, 5, 4]
    // i + 1 
    
    
    return ret;
}

console.log(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]));	// [3,4,2,1,5]
console.log(solution(4,	[4,4,4,4,4])); // [4,1,2,3]