import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import FindUsSection from "./Sections/FindUsSection";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="white"
        routes={dashboardRoutes}
        brand="Eslövs Emballage"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <h1>Move Down</h1>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <FindUsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
