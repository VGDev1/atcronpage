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
          <h2 className={classes.title}>Om oss</h2>
          <h5 className={classes.description}>
          ATcron ABs fokus ligger på att utveckla system för att förenkla och automatisera trading.
          Vi har tillsammans med stora och välrespekterade traders tagit fram individuella lösningar med kundens personliga specifikationer i syfte.
          Grundarna i ATcron har länge varit intresserade både av aktiehandel och daytrading. Detta kombinerat med goda kunskaper inom IT, automation och programmering gör att ATcron smidigt kan samarbeta och förstå vad kunderna vill ha.
          Vårt mål är att minska kundens skärmtid och samtidigt öka avkastningen. 

          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
