import {withStyles} from "@material-ui/core/styles";
import {purple} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import React from "react";

const PrimaryBtn = withStyles((theme) => ({
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

function PrimaryButton(props){

    return (
        <PrimaryBtn variant="contained" color="primary">
            {props.text}
        </PrimaryBtn>
    );

}

export default PrimaryButton;