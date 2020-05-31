"use strict";

var tem = React.createElement(
  "div",
  { id: "surya" },
  React.createElement(
    "h1",
    null,
    "surya !"
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "22"
    ),
    React.createElement(
      "li",
      null,
      "trichy"
    )
  )
);
var approot = document.getElementById("app");
ReactDOM.render(tem, approot);
