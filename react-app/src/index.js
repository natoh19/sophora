import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';

const store = configureStore();



store.subscribe(() => {

  window.localStorage.setItem('cart', JSON.stringify(store.getState().cart));

})

ReactDOM.render(


      <Provider store={store}>
        <App />
      </Provider>,


  document.getElementById('root')
);
