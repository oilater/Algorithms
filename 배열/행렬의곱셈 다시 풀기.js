/**
 * [행렬의 곱셈]
 * A행렬
 * A행 * K열
 * 
 * B행렬
 * K행 B열
 * 
 * A행렬의 열 개수와 B행렬의 행 개수가 동일할 때만 두 행렬 간의 곱셈이 가능하다.
 * 
 * 의사 코드
 * 두 행렬의 곱을 담을 2차원 배열이 필요
 * A행렬의 행 돌고, B행렬의 열 돌면서 서로 곱해 Ret 배열에 넣기
 * 
 * O(N^3)
 */

function solution(arr1, arr2) {
    // 3*2, 2*2라 가정

    // ret 행렬의 크기부터 구하자
    const r1 = arr1.length;
    const c1 = arr1[0].length;

    const r2 = arr2.length;
    const c2 = arr2[0].length;

    const ret = [];
    for (let i = 0; i < r1; i++) {
        ret.push(new Array(c2).fill(0));
    }
    // Ret 행렬 초기화 끝

    // 이제 두 행렬의 곱으로 값을 채우자

    for (let i = 0; i < r1; i++) {
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) {
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return ret;
}
