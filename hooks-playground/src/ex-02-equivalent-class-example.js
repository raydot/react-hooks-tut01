import React from "react";

class Ex02 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <h3>Ex 02</h3>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click this!
        </button>
      </div>
    );
  }
}

export default Ex02;
