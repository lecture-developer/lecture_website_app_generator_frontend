import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import DropDownFilter from "../SharedObjects/DropDownFilter";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from '@material-ui/core/FormGroup';
import Grid from "@material-ui/core/Grid";
import ViewMode from "./ViewMode";
import {Divider} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem',
        marginBottom: '2rem'
    },
    formControl: {
        display: "flex",
        direction: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    label: {
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
        color: "#828282",
    },
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
            justify="space-between"
            direction="row"
            alignItems="flex-end">
            <Grid item>
            <Grid
                container
                alignItems="flex-end"
                spacing={3}>
                <Grid item>
                <FormLabel className={classes.label}>Filter by</FormLabel>
                    <DropDownFilter
                        options ={ typeFilterExample}
                        placeholder={"Topic"}/>
                </Grid>
                <Grid item>
                    <DropDownFilter
                        options ={ typeFilterExample}
                        placeholder={"Type"}/>
                </Grid>
                <Grid item>
                    <DropDownFilter
                        options ={ typeFilterExample}
                        placeholder={"Year"}/>
                </Grid>
                <Grid item>
                <FormLabel className={classes.label}>Sort by</FormLabel>
                    <DropDownFilter
                        options ={ typeFilterExample}
                        placeholder={"Drafts first"}/>
                </Grid>
            </Grid>
            </Grid>
            <Grid item align-items-flex-end>
                <ViewMode />
            </Grid>
        </Grid>
    </div>
    );
}

export default Filters;