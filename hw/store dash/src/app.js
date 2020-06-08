import React,{component} from 'react';
import Form from './from';
const usr="adminpasswd";
var log=()=>{
 console.log("login");
 ren();
}
const ren=()=>{
var approot=document.getElementById("app");
ReactDOM.render(
  <div>
  <Form />
  </div>
  ,approot)
}
ren();