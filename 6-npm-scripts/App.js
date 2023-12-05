import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement("h1", { id: "heading" }, "React scripts");
const body = React.createElement("div", { id: "body" }, h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(body);
