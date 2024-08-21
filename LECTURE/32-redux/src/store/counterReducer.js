// src/store/counterReducer.js
// toolkit 사용하지 않은 버전(전통방식의 리덕스)

// 1. 액션 타입 상수 정의 (counter namespace 용 일뿐!)
// - 코드의 가독성을 높이고, 네임스페이스를 명확하게 구분하여 이름 충돌을 방지하기 위함.
const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// 2.액션 생성자 정의
// 이를 통해서 컴포넌트에 액션을 쉽게 디스패치 할수 있음
/* 
  액션
  type 반드시 포함해야한다 / 이름도 변경 불가능!
  => 리듀서는 이 type을 보고 어떤 상태 변경을 해야 할지 판단
  type 액션의 유형을 설명하는 문자열(필수속성)

  추가데이터 종류
  payload / meta / error
*/

// export const plus = ()=>({type : 'counter/PLUS'}); //PLUS 액션 생성
// export const minus = ()=>({type : 'counter/MINUS'}); //MINUS 액션 생성
export const plus = ()=>({type : PLUS}); //PLUS 액션 생성
export const minus = ()=>({type : MINUS}); //MINUS 액션 생성


// 3. state 상태초기값 정의
const initialState = {
  number : 100, //초기 number 값 설정
}

// 4. 리듀서 정의(상태, 액션 받음)
const counterReducer = (state = initialState,action)=>{
  switch (action.type) {
    case PLUS:
      return{number : state.number+1};
    case MINUS:
      return{number : state.number-1};
    default:
      return state;
  }

};

export default counterReducer;