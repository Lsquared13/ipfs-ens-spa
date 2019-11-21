import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import buildStore from './state';
import * as serviceWorker from './serviceWorker';

// Setup the Redux store once, on app mount.
const store = buildStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
