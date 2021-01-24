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
import trading from "assets/img/trading.jpg";


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
              <img src={eztv2} alt="..."  />
              <h4 className={classes.title}>
                EasyTV
                <br />
                <small className={classes.smallTitle}>För enklare tv.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                EasyTV är ett projekt skapat av Victor Gunnarsson tillsammans med Pontus Sahlenbo. Tanken bakom EasyTV är att skapa en intuitivare variant av svtplay för att lättare kunna hitta populära program och kunna bläddra i alfabetisk ordning.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={watersystem} alt="..."  />
              <h4 className={classes.title}>
                EasyTV
                <br />
                <small className={classes.smallTitle}>För enklare TV.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                EasyTV är ett projekt skapat av Victor Gunnarsson tillsammans med Pontus Sahlenbo. Tanken bakom EasyTV är att skapa en intuitivare variant av svtplay för att lättare kunna hitta populära program och kunna bläddra i alfabetisk ordning.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github fa-2x"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={eztv2} alt="..."  />
              <h4 className={classes.title}>
                EasyTV
                <br />
                <small className={classes.smallTitle}>För enklare tv.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                EasyTV är ett projekt skapat av Victor Gunnarsson tillsammans med Pontus Sahlenbo. Tanken bakom EasyTV är att skapa en intuitivare variant av svtplay för att lättare kunna hitta populära program och kunna bläddra i alfabetisk ordning.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <img src={eztv2} alt="..."  />
              <h4 className={classes.title}>
                EasyTV
                <br />
                <small className={classes.smallTitle}>För enklare tv.</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                EasyTV är ett projekt skapat av Victor Gunnarsson tillsammans med Pontus Sahlenbo. Tanken bakom EasyTV är att skapa en intuitivare variant av svtplay för att lättare kunna hitta populära program och kunna bläddra i alfabetisk ordning.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-github"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-youtube"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

