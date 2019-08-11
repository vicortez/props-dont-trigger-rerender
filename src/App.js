import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./ChildComponent";

class App extends React.Component {
  state = { someObject: { number: 0 } };

  handleClick = () => {
    const { someObject } = this.state;
    someObject.number += 1;
    this.setState({ someObject });
  };
  componentDidUpdate() {
    console.log(this.state.someObject.number);
  }
  render() {
    const { someObject } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>add 1 to parent state</button>
        <ChildComponent number={someObject.number} />
      </React.Fragment>
    );
  }
}

export default App;
