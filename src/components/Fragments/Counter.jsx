import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex items-center gap-2">
        <h1>{this.state.count}</h1>
        <button
          className="bg-blue-600 hover:bg-blue-700 p-2 text-2xl text-white"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
