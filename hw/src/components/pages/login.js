import React from 'react';
import Orders from './orders';
import Inval from '../inval';
import '../../style/login.css';
import { useHistory } from "react-router-dom";
//import { CookiesProvider } from 'react-cookie';
//import axios from 'axios';
const adminpass="surya";
//const delivpass="prakash";
var passlen;

class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
    user:'',
    pass:''
    }
    this.passval= this.passval.bind(this);

  }
  login(event){ 
   let history = useHistory();
  const opt=event.currentTarget.password.value.trim();
  if(opt== adminpass){
    history.push("/orders");
    //var loginscreen=[];
      //loginscreen.push(<Orders parentContext={this} />);
    alert("success");
  }
  event.preventDefault();
}
passval(event) {
 // const opt=event.currentTarget.password.value.trim();
 //const opt=newval; 
 //passlen=opt.length;
 this.setState({ pass: event.currentTarget.value});
 console.log(event.currentTarget.value);
  }

render(){


  return( 
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
         <invalid len={passlen}/>
        <input value={this.state.pass} onChange={this.passval } type="password" className="pass" name="password" />
          <inval pass="pakki"/>
        <br />
        <Inval pass={this.state.pass}/>
        <button type="submit" className="but" >submit</button>
      </form>
    </div>);
}
}

export default Login;
