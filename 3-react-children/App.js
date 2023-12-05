const elements = React.createElement(
  "div",
  { id: "rootDiv" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1"),
    React.createElement("h2", {}, "This is h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elements);
