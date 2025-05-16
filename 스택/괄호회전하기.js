/**
 * 괄호 회전하기
 * s만큼 회전
 * 
 * s만큼 돌리는 로직
 * 최종적으로 검사하는 로직
 * 
 * 풀이 전략
 * 배열에 문자열 하나씩 담음
 * 
 * s-1까지 for문 돌림
 * answer 에 하나씩 넣기
 * 
 * 검사로직 => 스택 활용
 * 하나씩 스택에 넣어보면서
 * 상쇄되면 pop
 * 길이 0이면 answer +=1
 * 
 */

function solution(s) {
    var answer = 0;
    const arr = s.split("");
    // s-1만큼 돌기
    for (let s = 0; s < arr.length - 1; s++) {
        // 스택 초기화
        const stack = [];

        for (const str of arr) {
            if (str === '[' || str === '(' || str === '{') {
                stack.push(str);
            } else {
                if (stack.length == 0) {
                    stack.push(str);
                    break;
                }
                
                if (str === ']') {
                    if (stack.at(-1) === '[') stack.pop();
                }

                if (str === '}') {
                    if (stack.at(-1) === '{') stack.pop();
                }

                if (str === ')') {
                    if (stack.at(-1) === '(') stack.pop();
                }
            }
        }

        if (stack.length === 0) answer++;
        arr.push(arr.shift());
    }
    
    return answer;
}


console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]"));	// 0
console.log(solution("}}}"));	// 0