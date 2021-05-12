import React from "react";

export class ClockComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.clock = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentDidCatch(error, info) {
    console.log("error :", error, info);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
      </h1>
    );
  }
}
