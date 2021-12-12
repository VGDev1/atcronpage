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
          <h2 className={classes.title}>Produkter - Software och finans</h2>
          <h5 className={classes.description}>
            Vi har en bred kunskap inom software och finans. Vårt huvudfokus ligger just nu på att utveckla automatiska tradingsystem, men kontakta oss ifall ni har andra förslag inom finansbranschen.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Frontend"
              description="ATcron har goda kunskaper inom frontendutveckling och skapar alla hemsidor och GUI från grunden, med kundens krav och specifikationer i fokus"
              icon={Filter1Icon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Backend"
              description="ATcron anställer endast kompetenta personer som är utbildade eller har en pågående utbildning till civilingenjörer i datateknik. Detta gör att det finns oerhört mycket kompetens för backend och software development, samt en djup förståelse för teknisk analys."
              icon={Filter2Icon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Finans"
              description="Ett grundläggande krav för att få arbeta på ATcron är att ha ett genuint och brinnande intresse för aktiehandel samt trading. Flertalet av utvecklarna på ATcron har följt marknaden intensivt under många år och är väl insatta i finansvärlden."
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
