import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      generated: false,
      url: ""
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ text: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const userText = this.state.text;
    this.setState({ generated: true, url: userText });
  }

  render() {
    let image = this.state.generated ? (
      <img src={`https://robohash.org/${this.state.url}.png?set=set4`} />
    ) : (
      <span />
    );

    return (
      <div className="App">
        <header className="App-header">Welcome to RoboHash!</header>
        <form className="container" onSubmit={this.submit.bind(this)}>
          <input
            type="text"
            placeholder="Enter some text to generate a sprite!"
            name="input"
            value={this.state.text}
            onChange={this.update}
          />
          <input type="submit" value="Generate Sprite!" />
        </form>

        {image}
      </div>
    );
  }
}

export default App;
