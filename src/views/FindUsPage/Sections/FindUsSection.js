import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import GoogleMap from "components/Map/GoogleMaps";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

// karta?? 
// <GoogleMap lat={"55.706421"} lng={"13.188050"} />

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Var finns vi?</h2>
          <h5 className={classes.description}>
            Vi är stationerade i Lund. 
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
