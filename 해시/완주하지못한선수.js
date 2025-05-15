/**
 * 배열로 비교하면 제한 시간에 걸림
 * 객체나 Map의 키값으로 찾자
 * 
 * 풀이 전략
 * completion 이름을 키값으로, 임의의 값으로 forEach로 맵에 담는다
 * participant를 돌며 맵에서 get으로 조회가 안되면 출력한다.
 * 
 * => 문제 : participant가 한명인 경우 예외 처리
 * => 문제 : 동일인이 또 나오는 경우도 있음 (값을 증가시켜야 할듯)
 * 
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

    for (const p of participant) {
        const v = map.get(p) || 0;
        map.set(p, v + 1);
    }

    for (const c of completion) {
        if (map.get(c)) {
            map.set(c, map.get(c) - 1);
        } else {
            return c;
        }
    }

    for (const [k, v] of map) {
        if (v == 0) continue;
        return k;
    }
}


console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); //	"leo"
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"])); // "vinko"
console.log(solution(["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]));	// "mislav"