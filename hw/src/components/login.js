import React from 'react';
import '../style/login.css';
//import { CookiesProvider } from 'react-cookie';
//const adminpass="surya";
//const delivpass="prakash";

class Login extends React.Component{
  login=()=>{
    
  }
  render(){
    return(
    <div className="container">
          
          <form>
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
            <button type="submit" onClick={this.login} className="but">submit</button>
            
          </form>
        </div>
    )
  }
}
export default Login;
