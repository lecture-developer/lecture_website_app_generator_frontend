import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import AboutMenuItem from "./AboutMenuItem";
import ResourcesMenuItem from "./ResourcesMenuItem";
import FooterList from "./Footer/FooterList";
import Header from "./Header/Header";
import Box from '@material-ui/core/Box';
import CoursesIcon from "../Icons/CoursesIcon";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "100%",
    maxWidth: 310,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  mainMenu: {
    marginTop: '10px',
    height: '55vh',
  }
}));

export default function MenuList() {
  const classes = useStyles();
  const colorNotClicked = "#828282";
  const colorClicked = "#5A67D8";
  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.list}
      >
        <Header
        fullName = "Theodore (Teddy) Lazebnik" />
        <Divider light />
        <div className={classes.mainMenu}>
        <AboutMenuItem />
        <ListItem button>
          <ListItemIcon>
            <RadioButtonUnchecked />
          </ListItemIcon>
          <ListItemText primary="Publications" />
        </ListItem>
        <ResourcesMenuItem />
        <ListItem button>
          <ListItemIcon>
            <CoursesIcon
            color={colorNotClicked} />
          </ListItemIcon>
          <ListItemText primary="Courses" />
        </ListItem>
        </div>
      </List>

      <Divider light />
      <FooterList />
      </div>
  );
}
