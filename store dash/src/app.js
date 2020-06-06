
const usr="adminpasswd";
var log=()=>{
 console.log("login");
 ren();
}
const ren=()=>{
var tem =( <div id="surya">
<h1>Login</h1>
<form>
  <label>
    password:
    <input type="text" name="password" />
  </label>
  <input type="submit" value="Submit" />
</form>
</div>);
var approot=document.getElementById("app");
ReactDOM.render(tem,approot)
}
ren();