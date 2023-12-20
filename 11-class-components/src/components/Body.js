import React from "react";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    return (
      <div className="body">
        count: {count}
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default Body;
