import React from "react";
import ReactDOM from "react-dom/client";
const p = <p id="test">This is a paragraph</p>
const heading = React.createElement("h1", {}, ["Hello from new react app!", p]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
