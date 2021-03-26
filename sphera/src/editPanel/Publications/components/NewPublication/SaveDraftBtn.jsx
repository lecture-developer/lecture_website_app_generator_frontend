import React from 'react';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// CSS PROVIDERS
const SaveDraftButton = withStyles((theme) => ({
    root: {
        color: '#5A67D8',
        textTransform: 'capitalize',
        width: '137px',
    }
  }))(Button);

// SaveDraftBtn
export const SaveDraftBtn = (props) => {
    return (
        <SaveDraftButton 
            onClick={props.onClick}
            color="primary"
            variant="outlined"
        >Save Draft
        </SaveDraftButton>
    );
}
export default SaveDraftBtn;