import React from 'react';
const Inval = (props) =>{
    
    if(props.len<5){return(
     <div className="passchk">invalid password</div>);}
     else{
        console.log(props.len);
       return (<div/>);
       }

   }
   export default Inval;