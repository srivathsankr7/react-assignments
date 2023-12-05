const h1 = React.createElement(
  "h1",
  { id: "heading1" },
  "This is h1 tag from react"
);
const div = React.createElement("div", { id: "body" }, h1);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);
