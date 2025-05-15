// &&
// flag && func()의 조합
// flag가 true일 때 func() 실행

const makeCompany = (showAddress) => {
    return {
        name: '성현컴퍼니',
        ...showAddress && {address : 'Seoul'} // showAddress가 true면 뒤 객체에 스프레드 연산 적용
    };
}

console.log(makeCompany(false)); // { name: '성현컴퍼니' }
console.log(makeCompany(true)); // { name: '성현컴퍼니', address: 'Seoul' }

// ||도 마찬가지로
// flag가 false일 때, func() 실행
// participantName이 0, undefined, '', null일 경우 false가 되어 'Guest'로 할당된다.
// const name = participantName || 'Guest';