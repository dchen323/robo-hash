import React, { Component } from "react";
import { Animated } from "react-animated-css";
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
    this.resetState = this.resetState.bind(this);
  }

  update(e) {
    this.setState({ text: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    const userText = this.state.text;
    this.resetState();
    setTimeout(() => this.setState({ generated: true, url: userText }), 0);
  }

  resetState() {
    this.setState({ generated: false });
  }

  render() {
    let image;
    image = this.state.generated ? (
      <Animated animationIn="bounceInLeft">
        <img
          src={`https://robohash.org/${this.state.url}.png?set=set4`}
          className="picture animated bounce"
          alt="cat"
        />
      </Animated>
    ) : (
      <span />
    );

    return (
      <div className="App">
        <header className="App-header">Welcome to Cat Sprites!</header>
        <form onSubmit={this.submit.bind(this)} className="form-inline form">
          <div className="form-group mx-sm-4 mb-2">
            <input
              type="text"
              placeholder="Enter some text to generate a sprite"
              name="input"
              className="form-control form-control-lg input"
              value={this.state.text}
              onChange={this.update}
            />
          </div>
          <input
            type="submit"
            value="Generate Sprite"
            className="btn btn-info btn-lg mb-2"
          />
        </form>
        {image}
      </div>
    );
  }
}

export default App;
