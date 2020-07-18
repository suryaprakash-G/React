import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch,} from 'react-router-dom';
import './style/index.css';
import Routes from './components/routes';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Routes />
    </Switch>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
