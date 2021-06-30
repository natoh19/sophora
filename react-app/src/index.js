import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import {loadUserState, saveUserState, saveLikeState, loadLikeState, saveState, loadState} from './components/localStorageLikes/index'




const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   window.localStorage.setItem('cart', JSON.stringify(state.cart));

// });

store.subscribe(() => {
  // saveLikeState({
  //   liked: store.getState().loves.liked,
  // });
  saveState({
    state: store.getState(),
    banana: store.getState().loves.liked,
    // order: store.getState().order,
    user: store.getState().session.user
  }

  )
  saveUserState({
    user: store.getState().session.user
  })
  window.localStorage.setItem('cart', JSON.stringify(store.getState().cart));


})

ReactDOM.render(
  <React.StrictMode>

      <Provider store={store}>
        <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);
