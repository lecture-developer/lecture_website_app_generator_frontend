import React, {useState} from "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Divider} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
        marginTop:'16px',
        marginBottom: '16px'
    },
    title: {
        fontSize: 14,
        color: "#2D3748",
        fontFamily: "roboto",
        padding: '26px 32px 0 32px'
    },
    headline: {
        fontFamily:"Playfair Display",
        fontSize: '24px',
        fontWeight: '700',
        letterSpacing: '0.04em',
        color: '#2d3748',
        padding:'0 32px 0 32px'
    },
    body: {
        fontSize: '16px',
        lineHeight: '150%',
        color: '#2d3748',
        padding:'16px 32px 24px 32px',
    },
    chip: {
        textOverflow: "inherit",
        background: "#F1F3F5",
        borderRadius: "4px",
        fontSize: '16px',
        fontWeight: '500',
        color: '#828282',
    },
    tagsArea: {
        display:"flex",
        justifyContent:"flex-end",
        paddingRight: "32px",
        "& p": {
            fontSize: '16px',
            lineHeight: '140.625%',
            letterSpacing: '0.04em',
            textAlign: 'center',
            color: '#828282',
        }
    }
});


function ContentCard(props){
    const classes = useStyles();

    let tagsCounter = 0;

    return (
        <Card className={classes.root} >
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    {props.authors} | Last edit {props.lastEdit.split("|")[0]}
                </Typography>
                <Typography className={classes.headline} variant="h5" component="h2">
                    {props.publicationName}
                </Typography>
                <Typography className={classes.body} variant="body2" component="p">
                    {props.content}
                </Typography>
            </CardContent>
            {props.tags.length > 0 ? <div>
                <Divider />
            <CardActions className={classes.tagsArea}>
                {props.tags.map((tag) => {
                    tagsCounter++;
                    if(tagsCounter <= 4){
                        return <Chip className={classes.chip} key={tag} label={tag.toUpperCase()} />;
                    }
                    return null;
                })}
                {tagsCounter > 4 ? <p className={classes.plus}>+{(tagsCounter - 4)}</p> : null}
            </CardActions></div> : null }
        </Card>
    );
}

export default ContentCard;