import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  title: {
    '& h2': { 
    fontFamily: "Playfair Display",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "32px",
    /* identical to box height */
    
    letterSpacing: "0.04em",
    padding: "0px",
   },
  },
  parah: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "150%",
    color: "black",
    paddingTop: "8",
  },
  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "16px",
    lineHeight: "19px",

    /* Indigo4 */
    color: "#5A67D8",
  }
}));

 function CustomDialog(props) {
  const classes = useStyles();

  // const [open, setOpen] = React.useState(false);
  // const theme = useTheme();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const dialogTitle = "You haven't added any links or files";
  // const dialogContentText = "Are you sure you want to publish without them?";
  // const closeButtonText = "No, go back";
  // const continueButtonText = "Yes, Publish";
  //isOpen, handleClose, title, subtitle,closeButtonText,continueButtonText
  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"
        className={classes.title}>
          {props.title}
          </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.parah}>
            {props.subtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} 
           className={classes.buttonText}
          color="primary">
            {props.closeButtonText}
          </Button>
          <Button onClick={props.handleContinue}
           className={classes.buttonText}
           color="primary" autoFocus>
            {props.continueButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomDialog;