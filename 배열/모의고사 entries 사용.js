/**
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 
 * 10000문제 최대
 * 가장 높은 점수 받은 사람 여럿일 경우, return하는 값은 오름차순으로
 * 
 * 풀이 전략
 * 
 * O(N)
 * 
 * 정답을 하나 하나 돌면서 
 * a, b, c와 각각 비교한다.
 * 
 * 각각 맞은 개수를 더해준다.
 * 
 * 1, 2, 3 중 최대값을 구하고
 * 비교해서 점수가 똑같은 사람을 찾는다.
 */

const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
]

function solution(answers) {
    let scores = [0, 0, 0];
    
    for (const [i, answer] of answers.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (answer == pattern[i % pattern.length]) {
                scores[j]++;
            }
        }
    }

    const high = Math.max(...scores);

    let highScores = [];

    scores.forEach((v, i ) => {
        if (high == v) {
            highScores.push(i + 1);
        }
    });

    return highScores;
}