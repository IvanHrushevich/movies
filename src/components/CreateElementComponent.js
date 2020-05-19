import React from "react";

export class CreateElementComponent extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      "Hello from CreateElementComponent"
    );
  }
}
