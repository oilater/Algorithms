/**
 * 
 * 0 1 2 3 4
 * 1 5 9 4 3
 * 
 * 4 5 9 3
 * o o o
 * stack
 * 들어온 값과 stack[top]의 값 비교 
 * => 들어온 값이 더 크다면 push() -> 아직 길이가 정해지지 않았기 떼문
 * [0, 1, 2]
 * 들어온 값이 stack[top]보다 더 작다면?
 * => stack[top]의 길이가 정해진 것 -> answer[top]에 1 할당
 * => stack 끝까지 돌아보면서 현재 값보다 큰 값이 있으면 그것도 길이가 정해진 것 (현재 인덱스 - 스택 인덱스)로 할당
 * 아니라면 stack에 남겨둠
 *
 */

function solution(prices) {
    const stack = [];
    const answer = new Array(prices.length).fill(0);

    for (let i = 0; i < prices.length; i++) {
        // 첫 값은 넣기
        if (i === 0) {
            stack.push(i);
            continue;
        }

        // 현재 값이 더 크거나 같다면, 스택에 현재값도 추가 (길이 미정)
        if (prices[stack.at(-1)] <= prices[i]) {
            stack.push(i);
        } 
        // 현재 값이 top보다 작다면
        else {
            // 직전 값 길이 정해짐
            answer[stack.at(-1)] = 1;
            // 길이 정해진 값은 스택에서 제거
            stack.pop();
            // 스택 돌면서 현재값과 비교
            while (stack.length && prices[i] < prices[stack.at(-1)]) {
                answer[stack.at(-1)] = i - stack.at(-1);
                stack.pop();
            }
            stack.push(i);
        }
    }

    while (stack.length) {
        const top = stack.pop();
        answer[top] = prices.length - top - 1;
    }
    
    return answer;
}

console.log(solution([1, 2, 3, 2, 3]));	// [4, 3, 1, 1, 0]