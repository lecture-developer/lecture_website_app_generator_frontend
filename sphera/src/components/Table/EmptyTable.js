import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import PrimaryButton from "../SharedObjects/PrimaryButton";

const useStyles = makeStyles({
    paper: {
        marginTop: '2rem',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        minHeight: '450px',
        verticalAlign: 'middle',
        padding: '15%'
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
            <img src={props.img} alt='No publications yet'></img>
            <Typography variant="h5" component='h4' className={classes.title}>
                You haven’t added any publications yet
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Add publications and showcase your work to help students and other academics utilize
                your research. You can add papers, abstracts, book reviews, presentations and more.
            </Typography>
            <PrimaryButton text={"New publication"} className={classes.buttonMargin}/>
        </Paper>
    )
}

export default EmptyTable;