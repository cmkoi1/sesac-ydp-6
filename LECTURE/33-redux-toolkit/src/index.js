import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import App5 from './App5';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* #3. Store 연결 */}
    <Provider store={store}>
      {/* <App /> */}
      <App5/>
    </Provider>
  </React.StrictMode>
);

