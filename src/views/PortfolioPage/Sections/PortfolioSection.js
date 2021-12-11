import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/portfolioStyle.js";

import eztv2 from "assets/img/eztv2.png";
import watersystem from "assets/img/watersystem.png";
import stocktrading from "assets/img/stocktrading.jpeg";


const useStyles = makeStyles(styles);

export default function PortfolioSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Produktportfölj:</h2>  
          <h5 className={classes.subtitle}>Nedan syns produkter skapade av utvecklarna på ATcron:</h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={eztv2} alt="..." width="540" heigth="350" />
              <h4 className={classes.title}>
                EasyTV
                <br />
                <small className={classes.smallTitle}>För enklare tv.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                EasyTV är ett projekt skapat av Victor Gunnarsson tillsammans med Pontus Salenbo. Tanken bakom EasyTV är att skapa en intuitivare variant av svtplay för att lättare kunna hitta populära program och kunna bläddra i alfabetisk ordning.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  href="https://github.com/VGDev1/EasyTvReact"
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={stocktrading} alt="..." width="540" heigth ="350"/>
              <h4 className={classes.title}>
                Avanza robottrading
                <br />
                <small className={classes.smallTitle}>Algoritmisk robottrading för Avanzas plattform.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Atcron AB har utvecklat en algoritmisk robottrading för Avanza. Denna tradingplattform har ett enkelt och intuitivt one-page react GUI där användaren smidigt kan ställa in regler och parametrar för olika strategier som ska exekveras.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

