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
          <h2 className={classes.title}>Historia</h2>
          <h5 className={classes.description}>
          Eslövs Emballage AB startades av Allan Thure i slutet av 60- talet. Bolaget ombildades till aktiebolag 1987. 
          Tomas Thure som idag driver och äger företaget började i bolaget på heltid från 1986. 
          Företaget var som störst år 2000 med 4 anställda och vi flyttade då till våra nuvarande lokaler som vi själva byggde och renoverade.
          </h5>
          <h2 className={classes.title}>Nutid</h2>
          <h5 className={classes.description}>
          Jag satsar som tidigare på special emballage och diverse andra produkter i trä och skivmaterial. 
          Jag satsar av förklarliga skäl  inte på volym utan vill vara det lilla företaget med stor service och snabba säkra leveranser av enstaka produkter eller korta serier. 
          Min styrka är stort kunnande om specialemballage och inte minst de krav som ställs på dessa.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
