import React from 'react';
import '../style/components/sidenav.css';
import { Link } from 'react-router-dom'

function Sidenav(props) {  
return(<div className="sidenav flex-container">
    <div className="logo">OSM</div>
    <div className="logo2">Admin Pannel</div>
    <table className="table" >
    <tr >
        <Link  className={props.sel=="1"?"selected":"unselected"} to="/orders">orders</Link>
        </tr>
    <tr>
        <Link className={props.sel=="2"?"selected":"unselected"} to="/inventory">inventory</Link>
        </tr>
    <tr><div className={props.sel=="3"?"selected":"unselected"}>history</div></tr>
    <tr><div className={props.sel=="4"?"selected":"unselected"}>logout</div></tr>
    </table>
</div>);
};
export default Sidenav;