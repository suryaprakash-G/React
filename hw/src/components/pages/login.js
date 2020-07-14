import React from 'react';
import Orders from './orders';
import '../../style/login.css';
import { useHistory } from "react-router-dom";
//import { CookiesProvider } from 'react-cookie';
//import axios from 'axios';
const adminpass="surya";
//const delivpass="prakash";

class Login extends React.Component{
login(event){
  //const history = useHistory();
  event.preventDefault();
  const opt=event.currentTarget.password.value.trim();
  if(opt== adminpass){
    //history.push("/orders");
    //var loginscreen=[];
      //loginscreen.push(<Orders parentContext={this} />);
    alert(opt);
  }

  //alert("srya");
}
render(){return( 
  <div className="container">
  <h1 className="title">Login</h1>
      <form onSubmit={this.login}>
        <label className="index">login as: </label>
        <select id="login" className="options">
          <option>admin</option>
          <option>delivery</option>
        </select>
        <br />
        <br />
         <label className="index" >password:</label>
        <input type="password" className="pass" name="password" />
          
        <br />
        
        <button type="submit" className="but" onClick={this.login}>submit</button>
      </form>
    </div>);
}
}
export default Login;
