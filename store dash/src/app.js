import React,{component} from 'react';
class App extends component{
    render(){
      return ( 
        <div id="surya">
          <h1>Login</h1>
          <form>
             <label>password:</label>
            <input type="text" name="password" />
            <input type="submit" value="Submit" />
          </form>
        </div>);
    }
}
const usr="adminpasswd";
var log=()=>{
 console.log("login");
 ren();
}
const ren=()=>{
var approot=document.getElementById("app");
ReactDOM.render(Form,approot)
}
ren();