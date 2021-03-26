import React from 'react';
import Button from "@material-ui/core/Button";
import {withStyles, } from "@material-ui/core/styles";
import {purple} from "@material-ui/core/colors";

// CSS PROVIDERS
const NewPublishButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#5A67D8",
        borderRadius: 8,
        '&:hover': {
            backgroundColor: "#7F9CF5",
        },
        fontWeight: '400',
        fontSize: '0.75rem',
        paddingTop: '0.75rem',
        paddingBottom: '0.75rem'
    }
  }))(Button);

export default function NewPubBtn(props) {
    return <NewPublishButton onClick={props.onClick}>New publication</NewPublishButton>;
}