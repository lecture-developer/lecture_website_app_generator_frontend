import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import DropDownFilter from "../../../libraries/DropDownFilter";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import ViewMode from "./ViewMode";

/***
 * Filters row
 * props:
 *  3 lists with filter values {topics, types and years}
 *  4 handler functions - one for each filter + for sorting
 *
 */
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '3rem',
        marginBottom: '2rem',
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

const sortFilter = [
    { value: 'draftsFirst', label: 'Drafts first' },
    { value: 'lastEdited', label: 'Last edited' },
];

function createFilter(value){
    return {
        value: value,
        label: value
    }
}
function makeFiltersFromList(lst){
    let filters = [];
    lst.forEach(elem => {
        filters=[...filters,createFilter(elem)];
    });
    return filters;
}

function Filters(props){

    const classes = useStyles();
    const topic = makeFiltersFromList(props.topics);
    const type = makeFiltersFromList(props.types);
    const year = makeFiltersFromList(props.years);

    return (
    <div className = {classes.root}>
        <Grid
            container
            justify="space-between"
            direction="row"
            alignItems="flex-end"
            className="strike">
            <Grid item>
            <Grid
                container
                alignItems="flex-end"
                spacing={3}>
                <Grid item>
                <FormLabel className={classes.label}>Filter by</FormLabel>
                    <DropDownFilter
                        options ={topic}
                        placeholder={"Topic"}
                        filterContent={props.filterTopic}/>
                </Grid>
                <Grid item>
                    <DropDownFilter
                        options ={type}
                        placeholder={"Type"}
                        filterContent={props.filterType}/>
                </Grid>
                <Grid item>
                    <DropDownFilter
                        options ={year}
                        placeholder={"Year"}
                        filterContent={props.filterYear}/>
                </Grid>
                <Grid item>
                <FormLabel className={classes.label}>Sort by</FormLabel>
                    <DropDownFilter
                        options ={sortFilter}
                        placeholder={"Drafts first"}
                        filterContent={props.sortContent}/>
                </Grid>
            </Grid>
            </Grid>
            <Grid item align-items-flex-end="true">
                <ViewMode
                    displayList={props.displayList}/>
            </Grid>
        </Grid>
    </div>
    );
}

export default Filters;