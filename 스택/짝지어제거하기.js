function solution(s)
{
    const stack = [];

    for (const str of s) {
        if (stack.length === 0) {
            stack.push(str);
            continue;
        }

        if (stack.at(-1) === str) {
            stack.pop();
        } else {
            stack.push(str);
        }
    }

    return stack.length === 0 ? 1 : 0;
}


console.log(solution('baabaa'));	// 1
console.log(solution('cdcd')); // 0