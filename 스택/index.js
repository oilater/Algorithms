// 스택 구현해보기

// ( 이 들어오면 stack에 넣기
// ) 이 들어오면 stack의 top 확인해서 비교 
// 최종적으로 stack.length가 0이 아니면 false, 0이면 true 반환
function solution(dirs) {
    const stack = [];

    for (const dir of dirs) {
        if (dir === '(') {
            stack.push();
        }

        if (dir === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }    
    }

    return stack.length === 0;
}

