function solution(arr1, arr2) {
    const r1 = arr1.length; // 3
    const c1 = arr1[0].length; // 2

    const r2 = arr2.length; // 2
    const c2 = arr2[0].length; // 2

    const ret = [];

    // 두 행렬을 곱한 행렬 크기는 r1 * c2
    for (let i = 0; i < r1; i++) {
        ret.push(new Array(c2).fill(0));
    }
    
    // 행렬의 곱 구하기
    for (let i = 0; i < r1; i++) { // arr1 행 0  1 2
        for (let j = 0; j < c2; j++) {
            for (let k = 0; k < c1; k++) { // arr2 열 0 1
                ret[i][j] += arr1[i][k] * arr2[k][j];      
            }
    }
}
    return ret;
}
