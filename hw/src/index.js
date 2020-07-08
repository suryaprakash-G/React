import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './app';

import AppRouter from './components/routes';

ReactDOM.render(
    <AppRouter />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
