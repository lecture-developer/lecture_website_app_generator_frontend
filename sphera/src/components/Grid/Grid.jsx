import React, {useState} from "react";
import ContentCard from "./Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GridList from '@material-ui/core/GridList';

const useStyles= makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        width: '100%',
        maxHeight:'53vh',

    },
}))

function DisplayGrid(props){

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={1} spacing={32}>
            {props.rows.map((row,index) => {
                return (
                <ContentCard
                    key = {index}
                    publicationName={props.rows[index].publicationName}
                    authors={props.rows[index].authors}
                    lastEdit = {props.rows[index].lastEdit}
                    content = {props.rows[index].content}
                    tags = {props.rows[index].tags}/>);
            })}
        </GridList>
        </div>);

}

export default DisplayGrid;