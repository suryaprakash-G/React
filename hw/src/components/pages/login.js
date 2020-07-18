import React from 'react';
import Orders from './orders';
import Inval from '../inval';
import '../../style/login.css';
import history from '../history';

//import { CookiesProvider } from 'react-cookie';
//import axios from 'axios';
const adminpass="surya";
//const delivpass="prakash";

class Login extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
    user:'',
    pass:'',
    passlen:'6'
    }
    this.passval= this.passval.bind(this);

  }
  login(event){ 
  const opt=event.currentTarget.password.value.trim();
  if(opt== adminpass){
    history.push("/orders");
    this.props.history.push('/Orders');
    alert("success");
  }
  event.preventDefault();
}
passval(event) {
 this.setState({ pass: event.currentTarget.value});
 this.setState({ passlen: event.currentTarget.value.length});
 console.log(event.currentTarget.value);
  }

render(){
  return( <div>
    <h1 className="title">Login</h1>
    <div  className="jumbotron-fluid">
    <div className="container-fluid">
      <form onSubmit={this.login}>
        <label className="index">login as: </label>
        <select id="login" className="options">
          <option>admin</option>
          <option>delivery</option>
        </select>
        <br />
        <br />
         <label className="index" >password:</label>
         <invalid len={this.state.passlen}/>
        <input value={this.state.pass} onChange={this.passval } type="password" className="pass" name="password" />
         {
           (this.state.passlen<5)?
        (<div className="passchk">invalid password</div>):(<div/>)}
        <br />
        <Inval pass={this.state.pass}/>
        <button type="submit" className="but" >submit</button>
      </form>
    </div></div></div>);
}
}

export default Login;
