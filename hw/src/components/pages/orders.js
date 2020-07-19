import React from 'react';
import Sidenav from '../sidenav';
import '../../style/orders.css';
class Orders extends React.Component{
    render(){
        return(
            <div className="ord-pg">
            <div className="row flex-container">
            <Sidenav/>
            <div className="bdy col-sm-10">
            <h1 className="title-page">Orders</h1>
            orders
            </div>
            </div>
            </div>
        )
    }
}
export default Orders;