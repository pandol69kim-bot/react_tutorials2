// 2. redux reac-redux 모듈 설치
// 3. createSotre import
import { createStore } from 'redux';

// 4. reducer 함수 생성
function reducer(currenstState, action) {
    // currenstState 초기값 상태 값, action 변경한 상태 내용
    const newState = { ...currenstState }; // 새로운 상태를 생성할때 기존 상태을 불변을 유지하기 위해 스프레드 연산자 사용
    if (currenstState === undefined) { // 최초 초기 상태가 없다면
        return { number: 1 };   //number는 1 반환
    }

    if (action.type === 'PLUS') {
        newState.number++;
    } 
    return newState;

}   


export const store = createStore(reducer); // 5. createStore 에 reducer 함수 등록 후 main.jsx로 이동