import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useTheme } from '@material-ui/core/styles';
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

 function ResponsiveDialog() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title"
        className={classes.title}>
          {"You haven't added any links or files"}
          </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.parah}>
            Are you sure you want to publish without them?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} 
           className={classes.buttonText}
          color="primary">
            No, go back
          </Button>
          <Button onClick={handleClose}
           className={classes.buttonText}
           color="primary" autoFocus>
            Yes, Publish
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ResponsiveDialog;