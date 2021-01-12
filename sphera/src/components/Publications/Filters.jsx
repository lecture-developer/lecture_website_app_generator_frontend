import React, {useState} from "react";
import {makeStyles} from '@material-ui/core/styles';
import DropDownFilter from "../SharedObjects/DropDownFilter";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from '@material-ui/core/FormGroup';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '2rem'
    },
    formControl: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    label: {
        fontFamily: "Roboto",
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
        <FormControl className={classes.formControl}>
            <FormLabel className={classes.label}>Filter by:</FormLabel>
            <FormLabel className={classes.label}>Sort by:</FormLabel>
            <FormGroup className={classes.formGroup} row={true}>
                <DropDownFilter options ={ typeFilterExample}/>
                <DropDownFilter options ={ typeFilterExample}/>
                <DropDownFilter options ={ typeFilterExample}/>
                <DropDownFilter options ={ typeFilterExample}/>
            </FormGroup>
        </FormControl>
    </div>
    );
}

export default Filters;