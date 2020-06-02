
var cnt=0;
var add1=()=>{
    cnt++;
    ren();
    console.log("add"+cnt);
}
var sub1=()=>{
    cnt--;
    ren();
    console.log("sub");
}
const ren=()=>{
var tem =( <div id="surya">
<h1>count = {cnt}</h1>
<button onClick={add1}>add 1</button>
<button onClick={sub1}>sub 1</button>
</div>);
var approot=document.getElementById("app");
ReactDOM.render(tem,approot)
}
ren();