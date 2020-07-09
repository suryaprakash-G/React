import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ReactDom from 'react-dom'
import Login from './pages/login';
import Orders from './pages/orders';
const test=()=>(<div>pakki</div>);
const AppRouter=()=>(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/orders" component={Orders} exact={true}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
export default AppRouter;