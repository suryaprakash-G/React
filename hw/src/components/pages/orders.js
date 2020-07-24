import React from 'react';
import Sidenav from '../sidenav';
import '../../style/orders.css';
class Orders extends React.Component{
    render(){
        return(
        <div className="ord-page">
        <div className="row flex-container">
            <div className="col-md-2 no-float side">
                <Sidenav sel="1"/>
            </div>
            <div className="col-md-10 no-float  flex-container">
                <h1 className="title-page">Orders</h1>
                <div className="ord-window container">work in progress</div>
            </div>
        </div>
    </div>
        )
    }
}
export default Orders;