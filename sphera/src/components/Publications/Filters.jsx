import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DropDownFilter from "../SharedObjects/DropDownFilter";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

const typeFilterExample = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

function Filters(props){

    const classes = useStyles();
    return (
    <div className = {classes.root}>
        <Grid
            container
            xs="12"
            direction="row"
            justify="space-between"
            alignItems="center">
            <DropDownFilter options ={ typeFilterExample}/>
        </Grid>
    </div>
    );
}

export default Filters;