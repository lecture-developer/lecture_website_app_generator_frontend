import React, {useState} from "react";
import {makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PrimaryButton from "../SharedObjects/PrimaryButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  headline: {
    display: "flex",
    direction: "row",
    '& h1': {
      fontFamily: "Playfair Display",
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: "32px",
      color:"#2D3748"
    },
    '& p': {
      marginLeft: "5px",
      fontFamily: "Roboto",
      fontSize: 16,
      lineHeight: "19px",
      color:"#828282",
      paddingTop: "0.5em",

    },
  }
}));




function PublicationsHeader(props){
  const classes = useStyles();

return(
  <div className = {classes.root}>
  <Grid
    container
    xs="12"
    direction="row"
    justify="space-between"
    alignItems="center">
    <Grid item className={classes.headline}>
      <h1>Publications</h1>
      <p>({props.publicationsAmount})</p>
    </Grid>
    {props.publicationsBtn ? <Grid item>
      <PrimaryButton text = {"New publication"} />
    </Grid> : null}
  </Grid>
  </div>
);

}

export default PublicationsHeader;
