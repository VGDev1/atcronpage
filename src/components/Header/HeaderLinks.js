/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MapIcon from '@material-ui/icons/Map';


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/about" className={classes.listItem}>
          <Button
            href="/#"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <InfoIcon className={classes.icons} /> Om
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/portfolio" className={classes.listItem}>
        <Button
          href="/#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <WorkIcon className={classes.icons} /> Produktportfölj
        </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/contact" className={classes.listItem}>
        <Button
          href="/#"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <ContactMailIcon className={classes.icons} /> Kontakt
        </Button>
        </Link>

      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/victorgg00"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
