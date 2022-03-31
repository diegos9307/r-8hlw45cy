import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      check: false,
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  /*   handleChecked(e) {
    if (this.state.check === false) {
      this.setState({
        check: true,
      });
    } else {
      this.setState({
        check: false,
      });
    }
  } */

  render() {
    const pararagraph = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    );

    return (
      <div className="wrapper">
        <label>
          <input type="checkbox" onChange={this.handleChecked} /> Mostrar
          información importante
        </label>
        {this.state.check ? pararagraph : null}
      </div>
    );
  }

  handleChecked() {
    this.setState({ check: !this.state.check });
  }
}

export default App;
