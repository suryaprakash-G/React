import React from 'react';
import './App.css';

function App() {
  return (
    <div id="surya" className="container-fluid">
          <h1 className="title">Login</h1>
          <form>
          <label className="index">login as: </label>
            <select id="login" className="options">
              <option>admin</option>
              <option>delivery</option>
            </select>
            <br />
            <br />
             <label className="index">password:</label>
              <input type="text" classname="pass" name="password" />
              
            <br />
            <button type="submit" className="but">submit</button>
            
          </form>
        </div>
  );
}

export default App;
