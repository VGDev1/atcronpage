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
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Special och Exportemballage"
              description="Vi har varit med från början när krav började ställas på virket, först med Sundhetscertifikat som sedermera mynnat ut i standarden ISPM 15, vi kan detta. 
              Våra lådor skickas till alla världsdelar, och vi ser till att de stämplas på rätt sätt och ivissa fall kompletteras med intyg. Allt vi tillverkar är minst godkänt för ISPM 15."
              icon={Filter1Icon}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Standardemballage"
              description="Vi har också satsat på att lagerhålla ett sortiment med standard emballage såsom, pallar, pallkragar samt diverse skivor pallock, iläggskivor mm.
              Vi vänder oss till kunder som vill handla mindre mängder eller enstaka emballage av dessa slag"
              icon={Filter2Icon}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Skivor"
              description="Under 2000-talet har vi investerat och satsat mycket på skivmaterial och idag tillverkas en hel del produkter av detta slag.
              Vi sågar mycket i vår moderna skivklyv med stor precision. Olika slags material som lagerförs är Plywood, OSB, HDF, MDF, Board, även massiva träskivor och laminerade produkter.
              Vi tillverkar också en del inredningsprodukter såsom, köksbänkskivor, mäss inredningar, skjutdörrar, mm mm Under vägen har vi tillsammans med våra kunder sett möjlighet att såga även viss plast och t ex plexiglas med mycket bra resultat."
              icon={Filter3Icon}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Övrigt"
              description="Vår produktion ligger nära besläktad med vanligt snickeri och byggnation varvid en del tillverkning även på detta område utförs. 
              Kan nämna produkter såsom, grindar, staket, bodar, lekstugor, Friggebodar, inredningar på lager Mobilhotell, mm.
              Dessa produkter får tillverkas i mån av tid och inte sällan har vi lite ont om just den varan."
              icon={Filter4Icon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
