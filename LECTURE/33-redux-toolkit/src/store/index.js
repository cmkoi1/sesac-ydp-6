import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import isVisibleReducer from './isVisibleSlice';
import moneySlice from './money';


// #2. Store생성
// confitureStore를 사용하여 스토어 생성
// Redux Toolkit에서 제공하는 함수로, 스토어를 더 쉽게 설정할 수 있게 해줌

const store = configureStore({
  reducer:{
    counter : counterReducer,
    visibility : isVisibleReducer,
    money : moneySlice,
  }
});

export default store;