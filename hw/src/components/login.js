import React from 'react';
import axios from 'axios';
import '../style/login.css';
//import { CookiesProvider } from 'react-cookie';
//const adminpass="surya";
//const delivpass="prakash";

class Login extends React.Component{

  state = {
    user: '',
    pass:''
  }
  handleSubmit = event => {
    event.preventDefault();
    const log = {
      user: this.state.user,
      pass: this.state.pass
    }}
  login=()=>{
    axios.post(`127.0.0.1/store/api/login.php`,{log})
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
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
  };
}
export default Login;
