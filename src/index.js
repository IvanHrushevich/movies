import React from "react";
import ReactDOM from "react-dom";

import {
  ClassBasedComponent,
  CreateElementComponent,
  FunctionalComponent,
  PureReactComponent,
} from "./components/index";

const App = (
  <>
    <CreateElementComponent />
    <ClassBasedComponent />
    <FunctionalComponent />
    <PureReactComponent />
  </>
);

ReactDOM.render(App, document.getElementById("root"));
