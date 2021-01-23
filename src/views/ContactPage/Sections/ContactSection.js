import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Bootstrap
import { Button, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Kontakt</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Epost</Form.Label>
          <Form.Control type="email" placeholder="Skriv in epost" />
          <Form.Text className="text-muted">
            Vi delar ingen data
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Telefonnummer</Form.Label>
          <Form.Control type="number" placeholder="Telefonnummer" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Jag godkänner" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Meddelande</Form.Label>
          <Form.Control as="textarea" rows="7" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Skicka
        </Button>
      </Form>
    </div>
  );
}
