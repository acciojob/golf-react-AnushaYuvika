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
    // this.renderChoice = this.renderBallOrButton.bind(this);
    // this.buttonClickHandler = this.buttonClickHandler.bind(this);
    // this.handleKeyDown = this.handleKeyDown.bind(this);

    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Click For One Ball
        </button>
      );
    }
  }

  //   buttonClickHandler() {
  //     this.setState({ renderBall: true }, () => {
  //       document.addEventListener("keydown", this.handleKeyDown);
  //     });
  //   }

  //   handleKeyDown(event) {
  //     if (event.key === "ArrowRight" && this.state.renderBall) {
  //       this.setState({
  //         posi: this.state.posi + 5,
  //         ballPosition: { left: this.state.posi + 5 + "px" },
  //       });
  //     }
  //   }

  //   renderBallOrButton() {
  //     if (this.state.renderBall) {
  //       console.log("this.state.ballPosition", this.state.ballPosition);
  //       return <div className="ball" style={this.state.ballPosition}></div>;
  //     } else {
  //       return (
  //         <button className="start" onClick={this.buttonClickHandler}>
  //           Start
  //         </button>
  //       );
  //     }
  //   }

  // bind ArrowRight keydown event
  componentDidMount() {
    // document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        this.setState({
          ballPosition: { left: this.state.posi + 5 + "px" },
          posi: this.state.posi + 5,
        });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
