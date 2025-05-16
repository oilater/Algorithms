/**
 * 참가자들을 돌면서
 * 어떤 스테이지까지 올라갔는지 체크해준다.
 * 
 * 가장 작은 숫자의 스테이지부터 나열
 * 
 * 
 */

function solution(N, stages) {
    // 각 스테이지에 도전중인 참가자 ( 아직 깨진 못함)
    const challenger = new Array(N + 2).fill(0);

    // N + 2로 길이를 설정하면 stage에 해당하는 인덱스에 값을 넣을 수 있어서 편하다.
    for (const stage of stages) {
        challenger[stage]++;
    }

    // 총 플레이어의 수
    let total = stages.length;
    const fail = {};

    // 스테이지 별 실패율 구하기
    for (let i = 1; i <= N; i++) {
        // 해당 스테이지에 있는 참가자가 없다면 실패율은 0
        if (challenger[i] === 0) {
            fail[i] = 0;
            continue;
        }

        let ratio = challenger[i] / total;

        fail[i] = ratio;
        total -= challenger[i];
    }

    return Object.entries(fail).sort((a, b) => b[1] - a[1]).map(v => Number(v[0]));
}

console.log(solution(5,	[2, 1, 2, 6, 2, 4, 3, 3]));	// [3,4,2,1,5]
console.log(solution(4,	[4,4,4,4,4])); // [4,1,2,3]