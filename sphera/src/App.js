import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SideMenu from "./libraries/SideMenu/SideMenu";
import PublicationsRoot from "./editPanel/Publications/Root";
import Navbar from './libraries/Navbar/Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  content: {
    flexGrow: 1,
      background: '#F5F8FC'

  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <Navbar />
      </AppBar>

      <SideMenu />
      <main className={classes.content}>
      {/* toolbar pushes the contents so it wont be hidden by the navbar */}
        <Toolbar />
      {/*insert main window - publications etc */}
      <PublicationsRoot />
      </main>
    </div>
  );
}
