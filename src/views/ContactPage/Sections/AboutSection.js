import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Kontakta oss</h2>
          <h5 className={classes.description}>
          För att kontakta oss, vänligen mejla oss på jakob.westergarden@atcron.com, victor.gunnarsson@atcron.com eller axel.fossum@atcron.com

          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
