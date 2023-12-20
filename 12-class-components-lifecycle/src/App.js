import React from "react";
import ReactDOM from "react-dom";
import About from "./components/About";
import Contact from "./components/Contact";

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Contact />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
