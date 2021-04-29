import React from "react";

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), color: "black" };
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ date: new Date(), color: "red" });
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
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
