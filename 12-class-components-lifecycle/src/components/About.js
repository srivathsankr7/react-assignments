import React from "react";
class About extends React.Component {
  constructor() {
    super();
    console.log("about constructor");
  }

  render() {
    console.log("about render");
    return <div>This is about us page</div>;
  }

  componentDidMount() {
    console.log("about componentDidMount");
  }

  componentDidUpdate() {
    console.log("About componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("about componentWillUnmount");
  }
}

export default About;
