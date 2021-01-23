import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import FindUsPage from "views/FindUsPage/FindUsPage";
import History from "views/HistoryPage/HistoryPage.js";
import IspmPage from "views/IspmPage/IspmPage.js";
import ContactPage from "views/ContactPage/ContactPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/history" component={History} />
      <Route path="/ispm" component={IspmPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/findus" component={FindUsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
