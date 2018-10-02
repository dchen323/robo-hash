import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Welcome to RoboHash!</header>
        <form className="container">
          <input
            type="text"
            placeholder="Enter some text to generate a sprite!"
            name="input"
            value={this.state.text}
            onChange={this.update}
          />
          <input type="submit" value="Generate Sprite!" />
        </form>
      </div>
    );
  }
}

export default App;
