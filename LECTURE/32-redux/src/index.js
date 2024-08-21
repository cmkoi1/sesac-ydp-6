import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import counterReducer from './store/counterReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App3 from './App3';
import rootReducer from './store';
import App4 from './App4';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 6. store 생성 [전통 리덕스 방식]
// 'createStore'를 사용하여 Redux 스토어를 생성.
// const store = createStore(counterReducer);
// const store = createStore(rootReducer);

const store = createStore(
  rootReducer,
  // Redux DevTools Extension 사용하는 경우
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

root.render(
  <React.StrictMode>
    {/* react와 redux연결 */}
    {/* 애플리케이션의 모든 컴포넌트가 redux 스토어에 접근 할 수 있게 된다 */}
    {/* redux Provider로 store를 앱에 주입함 */}
    <Provider store={store}>
      {/* <App /> */}
      {/* <App2/> */}
      {/* <App3/> */}
      <hr/>
      {/* <App4/> */}
    </Provider>
  </React.StrictMode>
);

