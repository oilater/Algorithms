/**
 * 입력: U D L R
 * 처음 걸어본 길의 길이 구하기
 * -5 ~ 5 한계를 벗어나면 명령 무시하고 다음 명령으로
 * 
 * 풀이 전략
 * 현재 위치 [0, 0]
 * 이동할 때마다 각 위치를 저장
 * 지나간 길이 아니면 길이 더하기 (갈 곳이 내가 지났던 점이 아니면 길이 1을 더하면 된다)
 * 
 */
const path = new Map();

function solution(dirs) {
    const arr = dirs.split(""); 
    let length = 0;
    let curPosition = [0, 0];
    // 입력 받기
    for (const dir of arr) {
        let newR;
        let newC;

        if (dir === 'U') {
            newR = curPosition[0] + 1;
            newC = curPosition[1];
            if(isOutOfRange(newR, newC)) continue;
            curPosition = [newR, newC];
            if (isNewPath(curPosition)) length++;

        } else if (dir === 'D') {
            newR = curPosition[0] - 1;
            newC = curPosition[1];
            if (isOutOfRange(newR, newC)) continue;
            curPosition = [newR, newC];
            if (isNewPath(curPosition)) length++;
        
        } else if (dir === 'L') {
            newR = curPosition[0];
            newC = curPosition[1] - 1;
            if (isOutOfRange(newR, newC)) continue;
            curPosition = [newR, newC];
            if (isNewPath(curPosition)) length++;
        
        } else if (dir === 'R') {
            newR = curPosition[0];
            newC = curPosition[1] + 1;
            if (isOutOfRange(newR, newC)) continue;
            curPosition = [newR, newC];
            if (isNewPath(curPosition)) length++;
            
        }
    }
    
    
    return length;
}

function isNewPath(pos) {
    let x = pos[0];
    let y = pos[1];
    if (!path.get(x))  {
        path.set(x, y);
        return true;
    } else {
        if (path.get(x) == y) {
            return false;
        } else{
            return true;
        }
    }
}
// 범위 체크
function isOutOfRange(r, c) {
    return r < 0 || r >= 5 || c < 0 || c >= 5;
}

console.log(solution("ULURRDLLU")); //	7
console.log(solution("LULLLLLLU")); //	7