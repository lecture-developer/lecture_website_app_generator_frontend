import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './libraries/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
}));

export default function App() {
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Navbar />
        </AppBar>
        <MainRouter />
      </div>
  );
}
