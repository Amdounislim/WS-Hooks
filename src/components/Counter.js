import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("Conter.js constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  inc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  dec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  reset = () => {
    this.setState({
      count: 0,
    });
  };


  componentDidUpdate(){
      console.log("Counter.js componentDidUpdate")
  }

  //   componentDidMount() {
  //     console.log("Conter.js componentDidMount");
  //   }

  //   componentWillUnmount(){
  //       console.log("Counter.js componentWillUnmount")
  //   }

  render() {
    console.log("Counter.js render");
    return (
      <div>
        <h2>Counter</h2>
        <h3>{this.state.count}</h3>

        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
