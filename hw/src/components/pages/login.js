import React from 'react';
import '../../style/login.css';
//import { CookiesProvider } from 'react-cookie';
//import axios from 'axios';
//const adminpass="surya";
//const delivpass="prakash";

class Login extends React.Component{
login(event){
  event.preventDefault();
  const opt=event.currentTarget.password.value.trim();
  if(opt){
    alert(opt)
  }
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
         <label className="index">password:</label>
        <input type="text" className="pass" name="password" />
          
        <br />
        
        <button type="submit" className="but">submit</button>
      </form>
    </div>);
}
}
export default Login;
