import React from 'react';
const Inval = (props) =>{
    /*
    if(props.len<5){return(
     <div className="passchk">invalid password</div>);}
       return (<div/>);*/
       console.log(props.pass);
       return(<div>password is :{props.pass}</div>)

   }
   export default Inval;