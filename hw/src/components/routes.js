import React from 'react';
import Login from './pages/login';
import Orders from './pages/orders';
import Inventory from './pages/inventory';
import '../style/rts.css';
import {  Route } from 'react-router-dom';
const Routes=()=>(
  <div className="rts">
    <Route path="/" component={Login} exact={true} />
    <Route path="/orders" component={Orders} exact={true}/>
    <Route path="/inventory" component={Inventory} exact={true}/>
  </div>
  );
export default Routes;