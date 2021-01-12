import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import PublicationsHeader from "./PublicationsHeader";
import Filters from "./Filters";
import ContentTable from "../Table/Table";
import EmptyTable from "../Table/EmptyTable";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "64px",
    height: "90vh",
  }
}));

function createData(publicationName, authors, lastEdit) {
  return { publicationName, authors, lastEdit };
}

let rows = [
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent_23ed', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent_23ed', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent_23ed', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm', 'You and Shlomo Y..', '22/2/20  |  22:38'),
  createData('A stable algorithm for numerical matrix exponent_23ed', 'You and Shlomo Y..', '22/2/20  |  22:38'),
];


function PublicationsRoot(){
  const classes = useStyles();
  // rows = [];

  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount="12" publicationsBtn={rows.length !== 0 ? true : false}/>
    <Filters/>
    {rows.length !== 0 ? <ContentTable rows={rows}/> : <EmptyTable/>}
    </div>
  );

}

export default PublicationsRoot;
