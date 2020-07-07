import React from 'react';
import ReactDom from 'react-dom'
import Login from './components/login';
import Orders from './components/orders';
const approuter=()=>(
  <div>
    <BrowserRouter>
        <switch>
            <Route path="/" component={Login} exact={true}/>
            <Route path="orders" component={Orders} exact={true}/>
        </switch>
    </BrowserRouter>
   </div>
)
export default approuter;