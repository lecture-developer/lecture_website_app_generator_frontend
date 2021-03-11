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
import CoursesIcon from "../../assets/Icons/CoursesIcon";
import PublicationsIcon from "../../assets/Icons/PublicationsIcon";

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
  },
  picked: {
    position: "relative",
    '&:after' : {
      content: "''",
      display: 'block',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '4px',
      height: '100%',
      borderRadius: '0 7px 7px 0',
      background: '#5A67D8'
    },
    '& span': {
      color: "#5A67D8",
      fontWeight: "bold",
    }
  }
}));

export default function MenuList() {
  const classes = useStyles();
  const colorNotClicked = "#828282";
  const colorClicked = "#5A67D8";

  function styleClickedItem(event){
    const menuItem = event.target.getAttribute('name');

  }


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
        <AboutMenuItem name="about"/>
        <ListItem name="publications" className={classes.picked} button onClick={styleClickedItem}>
          <ListItemIcon>
            <PublicationsIcon
              color={colorClicked}/>
          </ListItemIcon>
          <ListItemText primary="Publications" />
        </ListItem>
        <ResourcesMenuItem name="resources" />
        <ListItem name="courses" button>
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
