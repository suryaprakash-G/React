"use strict";

var cnt = 0;
var add1 = function add1() {
    cnt++;
    ren();
    console.log("add" + cnt);
};
var sub1 = function sub1() {
    if (cnt >= 0) {
        cnt--;
    }
    ren();
    console.log("sub");
};
var res = function res() {
    cnt = 0;
    ren();
};
var ren = function ren() {
    var tem = React.createElement(
        "div",
        { id: "surya" },
        React.createElement(
            "h1",
            null,
            "count = ",
            cnt
        ),
        React.createElement(
            "button",
            { onClick: add1 },
            "add 1"
        ),
        React.createElement(
            "button",
            { onClick: sub1 },
            "sub 1"
        ),
        React.createElement(
            "button",
            { onClick: res },
            "reset"
        )
    );
    var approot = document.getElementById("app");
    ReactDOM.render(tem, approot);
};
ren();
