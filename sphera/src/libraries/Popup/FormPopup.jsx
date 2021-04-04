import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { withStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
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
  },

  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

// const DialogTitle = withStyles()((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });


 function CustomDialog(props) {
  const classes = useStyles();


  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent dividers>
          <CloseIcon className={classes.closeButton} onClick={props.handleClose}></CloseIcon>
          <DialogTitle id="responsive-dialog-title"
          className={classes.title}>
            {props.title}
            </DialogTitle>
            <DialogContentText className={classes.parah}>
              {props.subtitle}
            </DialogContentText>
          </DialogContent>
            {
              props.body()
            }
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