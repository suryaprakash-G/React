import React from 'react';
import '../style/components/sidenav.css';

function Sidenav(props) {  
return(<div className="sidenav col-sm-1 ">
    <ol>
    <li>orders</li>
    <li>inventory</li>
    <li>history</li>
    <li>logout</li>
    </ol>
</div>);
};
export default Sidenav;