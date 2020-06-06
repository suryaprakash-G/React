"use strict";

var usr = "adminpasswd";
var log = function log() {
  console.log("login");
  ren();
};
var ren = function ren() {
  var tem = React.createElement(
    "div",
    { id: "surya" },
    React.createElement(
      "h1",
      null,
      "Login"
    ),
    React.createElement(
      "form",
      null,
      React.createElement(
        "label",
        null,
        "password:",
        React.createElement("input", { type: "text", name: "password" })
      ),
      React.createElement("input", { type: "submit", value: "Submit" })
    )
  );
  var approot = document.getElementById("app");
  ReactDOM.render(tem, approot);
};
ren();
