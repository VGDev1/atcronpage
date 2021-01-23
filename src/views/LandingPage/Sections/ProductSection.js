import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import Filter4Icon from '@material-ui/icons/Filter4';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Produkter - produktion och försäljning</h2>
          <h5 className={classes.description}>
            Vi erbjuder ett brett antal tjänster finns de du söker inte omnämt här på sidan så tveka inte att höra av dig så återkommer vi.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Software"
              description="Vi är specialister på mjukvara, vi är civilingejörer/civilingejörsstudenter inom datateknik och därför kan vi erbjuda ett stort kunnande inom utveckling av mjukvara"
              icon={Filter1Icon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Elektronik"
              description="Vi har ett stort kunnande inom elektronik och erbjuder därför hjälp att ta fram olika elektroniska lösningar för olika problem"
              icon={Filter2Icon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Prototyper"
              description="Vi har under det gångna året satsat mycket på inköp av diverse maskiner för att kunna erbjuda hjälp med kompletta prototyper, vi erbjuder 3d utskrifter, PCB:er samt montering av diverse elektronik."
              icon={Filter3Icon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
