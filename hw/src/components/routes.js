import React from 'react';
import Login from './pages/login';
import Orders from './pages/orders';
import {  Route } from 'react-router-dom';
const Routes=()=>(
  <div>
    <Route path="/" component={Login} exact={true} />
    <Route path="/orders" component={Orders} exact={true}/>
  </div>
  );
export default Routes;