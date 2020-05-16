import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

const AppWithRouter = withRouter(App);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppWithRouter />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
