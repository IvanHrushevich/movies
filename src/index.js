import React from "react";
import ReactDOM from "react-dom";

import {
  ClassBasedComponent,
  CreateElementComponent,
  FunctionalComponent,
  PureComponent,
} from "./components/index";

const app = (
  <React.Fragment>
    <CreateElementComponent />
    <ClassBasedComponent />
    <FunctionalComponent />
    <PureComponent />
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById("root"));
