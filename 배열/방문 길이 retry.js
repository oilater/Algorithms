/**
 * 입력: U D L R
 * 처음 걸어본 길의 길이 구하기
 * -5 ~ 5 한계를 벗어나면 명령 무시하고 다음 명령으로
 * 
 * 풀이 전략
 * 현재 위치 [x, y] = [0, 0]
 * 새로운 위치 [nx, ny]
 * 
 * 이런 겹치는 경로 확인 문제는 Set 이용하는 게 좋다
 * 그냥 길이만 구하면 되니까 visited.size / 2 로 결과를 내면 된다
 * 
 * 중복 체크 방법
 * visited(Set)에 0111 1101 이런식으로 양방향 체크
 * 
 * 
 */

function solution(dirs) {
    let x = 0;
    let y = 0;
    const visited = new Set();
    
    for (const dir of dirs) {
        const [nx, ny] = updatePosition(x , y, dir);
        if (isOutOfRange(nx, ny)) continue;

        visited.add(`${x}${y}${nx}${ny}`);
        visited.add(`${nx}${ny}${x}${y}`);

        [x, y] = [nx, ny];
    }

    return visited.size / 2;
}

function updatePosition(x, y, dir) {
    switch (dir) {
        case 'U':
            return [x, y + 1];

        case 'D':
            return [x, y - 1];

        case 'L':
            return [x - 1, y];

        case 'R':
            return [x + 1, y];
    }
}

function isOutOfRange(x, y) {
    return x < -5 || x > 5 || y < -5 || y > 5;
}


console.log(solution("ULURRDLLU")); //	7
console.log(solution("LULLLLLLU")); //	7