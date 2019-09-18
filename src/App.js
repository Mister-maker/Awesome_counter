import React, { Component } from "react";
import "./App.css";
import Counter from "./components/static/Counter";
import Greeting from "./components/Greeting";
import Aux from "./hoc/Auxilery";

class App extends Component {
  state = {
    counter: 0,
    greeting: false,
    finalMessage: false
  };

  countMe = () => {
    this.setState(
      {
        counter: this.state.counter + 10
      },
      () => {
        if (this.state.counter > 50) {
          this.setState({
            greeting: true
          });
        }
        if (this.state.counter > 100) {
          this.setState({
            finalMessage: true
          });
        }
      }
    );
  };

  discountMe = () => {
    this.setState(
      {
        counter: this.state.counter - 10
      },
      () => {
        if (this.state.counter < 50) {
          this.setState({
            greeting: false
          });
        }
        if (this.state.counter <= 0) {
          this.setState({
            counter: 0
          });
        }
      }
    );
  };

  render() {
    let message;

    if (this.state.counter > 100) {
      message = "You did it boi";
    } else {
      message = "Nice to meet you";
    }

    return (
      <Aux>
        <div className="App">
          {this.state.counter > 100 ? (
            <Counter
              finalMessage={this.state.finalMessage}
              counterClock={this.state.counter}
            />
          ) : (
            <Counter
              counterClock={this.state.counter}
              removeCounter={this.discountMe}
              click={this.countMe}
            />
          )}
          {this.state.greeting ? (
            <Greeting
              message={message}
              messageCounter={this.state.counter}
              showGreeting="greeting-show"
            />
          ) : null}
        </div>
      </Aux>
    );
  }
}

export default App;
