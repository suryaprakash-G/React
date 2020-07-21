import React from 'react';
import '../style/components/sidenav.css';

function Sidenav(props) {  
return(<div className="sidenav flex-container">
    <div className="logo">OSM</div>
    <div className="logo2">Admin Pannel</div>
    <table className="table" >
    <tr>orders</tr>
    <tr>inventory</tr>
    <tr>history</tr>
    <tr>logout</tr>
    </table>
</div>);
};
export default Sidenav;