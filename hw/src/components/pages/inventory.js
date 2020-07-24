import React from 'react';
import Sidenav from '../sidenav';
import '../../style/inventory.css';

class Inventory extends React.Component{
    render(){
        return(
            <div className="inv-page">
        <div className="row flex-container">
            <div className="col-md-2 no-float side">
                <Sidenav sel="2"/>
            </div>
            <div className="col-md-9 no-float">
                <h1 className="title-page">Inventory</h1>
                <div className="ord-window"></div>
            </div>
        </div>
            </div>
        )
    }
}
export default Inventory;