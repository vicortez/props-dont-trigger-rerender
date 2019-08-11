import React from "react";
import logo from "./logo.svg";
import "./App.css";

class ChildCompoent extends React.Component {
  render() {
    return <div className="App">{this.props.number}</div>;
  }
}

export default ChildCompoent;
