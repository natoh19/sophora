import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';




const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('cart', JSON.stringify(state.cart));
});

ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>
        <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
