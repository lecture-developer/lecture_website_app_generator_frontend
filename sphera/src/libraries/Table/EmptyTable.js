import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import PrimaryButton from "../PrimaryButton";

const useStyles = makeStyles({
    paper: {
        marginBottom: '2rem',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        minHeight: '450px',
        verticalAlign: 'middle',
        padding: '3rem 10rem'
    },
    title: {
        fontFamily: 'Playfair Display',
        fontWeight: '700'
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '400',
        marginBottom: '2.5rem'
    }
});

function EmptyTable(props) {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} >
            <img src={props.img}></img>
            <Typography variant="h5" component='h4' className={classes.title}>
               {props.text[0]}
            </Typography>
            <Typography variant="body1" className={classes.text}>
            {props.text[1]}
            </Typography>
            <PrimaryButton text={"New publication"} className={classes.buttonMargin}/>
        </Paper>
    )
}

export default EmptyTable;