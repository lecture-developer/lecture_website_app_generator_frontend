import React, { useState } from 'react';
import styles from './NewPublication.module.css';
import {withStyles, makeStyles, MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HorizontalRule from './HorizoontalRule';
import NewPubBtn from './NewPubBtn';

// CSS PROVIDERS
const useStyles = makeStyles({
  root: {
    background: '#C4C4C4',
    width: 'calc(100% - 310px)',
    padding: '40px',
    marginTop: 68,
    marginLeft: 311,
  },
  label: {
    textTransform: 'capitalize',
    color: 'red'
  },
  title: {
    paddingBottom: '8px',
  },
});

// NEW PUBLICATION DIALOG
export const NewPublication = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NewPubBtn onClick={handleClickOpen}>New publication</NewPubBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen={true}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        <DialogTitle 
          id="alert-dialog-title"
          classes={{
            root: classes.title,
          }}
        >
          {"Add New Publication "}
        </DialogTitle>
        <div className={styles.dialogSubTitle}>
          Add as many details as possible to help your students and colleagues cite this publication.
        </div>
        <HorizontalRule />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           <div className={styles.sectionTitle}>Publication details</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </>
    );
}

export default NewPublication;