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
          <h2 className={classes.title}>Produktportfölj</h2>
          <h5 className={classes.description}>
          Ismp är en standard som är till för att underlätta global handel med träemballage. 
          Standarden fastslår behandling av trä för att döda alla eventuella skadeinsekter som annars kan spridas.
          </h5>
          <h5 className={classes.description}>
          För närvarande gäller att för handel inom EU finns inga krav. Utanför EU skall dock allt träemballage var godkänt enligt ISPM 15.
          </h5>
          <h5 className={classes.description}>
          <u> Tag kontakt med oss för att få utförliga beskrivningar om ISPM 15 </u>
          </h5>
          <h5 className={classes.description}>
          Det senaste inom ISPM 15 hittar du också på jordbruksverkets hemsida, se <a href="http://www.jordbruksverket.se/">jordbruksverket.se</a>.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
