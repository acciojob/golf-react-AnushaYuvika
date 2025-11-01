import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };
    this.renderChoice = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true }, () => {
      document.addEventListener("keydown", this.handleKeyDown);
    });
  }

  handleKeyDown(event) {
    if (event.key === "ArrowRight" && this.state.renderBall) {
      this.setState({
        posi: this.state.posi + 5,
        ballPosition: { left: this.state.posi + 5 + "px" },
      });
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      console.log("this.state.ballPosition", this.state.ballPosition);
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;
