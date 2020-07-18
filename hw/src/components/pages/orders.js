import React from 'react';
import Sidenav from '../sidenav';
import '../../style/orders.css';
class Orders extends React.Component{
    render(){
        return(
            <div>
            <h1 className="title">Orders</h1>
            <div className="container-fluid">
            <Sidenav/>
                <div className="bdy">
                    orders
                </div>
            </div>
            </div>
        )
    }
}
export default Orders;