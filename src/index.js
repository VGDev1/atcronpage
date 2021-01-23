import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import LandingPage from "views/LandingPage/LandingPage.js";
import FindUsPage from "views/FindUsPage/FindUsPage";
import About from "views/AboutPage/AboutPage.js";
import PortfolioPage from "views/PortfolioPage/PortfolioPage.js";
import ContactPage from "views/ContactPage/ContactPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/findus" component={FindUsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
