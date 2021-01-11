import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import PublicationsHeader from "./PublicationsHeader";
import Filters from "./Filters";
import ContentTable from "../Table/Table";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "64px"
  }
}));


function PublicationsRoot(){
  const classes = useStyles();

  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount = "12"/>
    <Filters/>
    <ContentTable />
    </div>
  );

}

export default PublicationsRoot;
