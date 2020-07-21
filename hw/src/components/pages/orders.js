import React from 'react';
import Sidenav from '../sidenav';
import '../../style/orders.css';
class Orders extends React.Component{
    render(){
        return(
        <div className="ord-page">
        <div className="row flex-container">
            <div className="col-md-2 no-float side">
                <Sidenav/>
            </div>
            <div className="col-md-9 no-float">
            <h1 className="title-page">Orders</h1>
            </div>
        </div>
    </div>
        )
    }
}
export default Orders;