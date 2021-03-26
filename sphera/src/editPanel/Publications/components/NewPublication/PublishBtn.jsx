import React from 'react';
import Button from "@material-ui/core/Button";
import { purple } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

// CSS PROVIDERS
const PublishButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#5A67D8",
        '&:hover': {
            backgroundColor: "#7F9CF5",
        },
        textTransform: 'capitalize',
        fontWeight: '300',
    }
  }))(Button);

// Publish Button
export const PublishBtn = (props) => {
    return (
        <PublishButton 
            onClick={props.onClick}
            color="primary"
            variant="outlined"
        >Save Draft
        </PublishButton>
    );
}
export default PublishBtn;