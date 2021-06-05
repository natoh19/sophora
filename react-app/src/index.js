import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import red from '@material-ui/core/colors/red';
// import black from '@material-ui/core/colors/black';

// const theme = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: {500: '#020d0f'},
//     secondary: {
//       main: '#000000',
//     },
//   },
// });

// const theme = createMuiTheme({
//   palette: {
//     type: "light",
//     primary: black,
//     secondary: {
//       main: '#b9f6ca',
//     },
//   },
// });

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      {/* <CssBaseline /> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
