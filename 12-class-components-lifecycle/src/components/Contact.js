import { Component } from "react";
class Contact extends Component {
  constructor() {
    super();
    console.log("contact constructor");
  }

  render() {
    console.log("contact render");
    return <div>This is contact us page</div>;
  }

  componentDidMount() {
    console.log("contact componentDidMount");
  }

  componentDidUpdate() {
    console.log("contact componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("contact componentWIllUnmount");
  }
}

export default Contact;
