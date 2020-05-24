import React, { Component } from "react";

export class CreateElementComponent extends Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello from CreateElementComponent"
    );
  }
}
