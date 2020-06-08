import React,{component} from 'react';
class Form extends component{
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
export default Form;