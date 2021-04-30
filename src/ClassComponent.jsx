import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: "black" };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <button onClick={e => console.log(this.state.color)}></button>
      </h1>
    );
  }
}
