/**
 * 배열로 비교하면 제한 시간에 걸림
 * 객체나 Map의 키값으로 찾자
 * 
 * 풀이 전략
 * 두 배열에 뭐가 됐든, 참가한 사람은 +1을 해주면 되는 거고
 * 완주한 사람은 -1을 해주면 된다.
 * 완주한 사람이 for문에서 먼저 등장해도 -1을 해놓으면 어차피 나중에 메꿔진다.
 * 최종적으로 0 이상의 값이 있다면 완주하지 못한 사람이다.
 * 
 * 제약 조건
 * 선수의 수: 1명 <= x <= 100,000
 * 완주자는 참가자보다 1명 적음
 * 참가자 이름: 20개 이하 알파벳 소문자
 * 동명이인 있을 수 있음
 */

function solution(participant, completion) {
    const map = new Map();

    if (participant.length === 1) return participant[0];

    for (let i = 0; i < participant.length; i++) {
        let p = participant[i];
        let c = completion[i];

        map.set(p, (map.get(p) || 0) + 1);
        map.set(c, (map.get(c) || 0) - 1);
    }

    for (const [k, v] of map) {
        if (v > 0) return k;
    }
}


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //	"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]));	// "mislav"