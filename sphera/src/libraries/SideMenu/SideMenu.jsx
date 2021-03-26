import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from "./MenuList";

const drawerWidth = 310;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  }
}));

function SideMenu(props){
  const classes = useStyles();

  return (
  <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left">
    <div className={classes.toolbar} />
    <MenuList url={props.url} />
  </Drawer>
);
}

export default SideMenu;
