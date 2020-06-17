import React from 'react';
import Login from './components/login';
import Orders from './components/orders';
var login=false;
class App extends React.Component{
    render(){
    if(login==false)
        return( <Login />)
    else
        return( <Orders /> )
    }
}  
export default App;