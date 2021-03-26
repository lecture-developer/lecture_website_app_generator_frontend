import React, { useState } from 'react';
import styles from './NewPublication.module.css';
import { makeStyles } from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { HorizontalRule, InnerHorizontalRule } from './HorizoontalRule';
import NewPubBtn from './NewPubBtn';
import PubDetailsSection from './PubDetailsSection';
import { SaveDraftBtn } from './SaveDraftBtn';
import { PublishBtn } from './PublishBtn';


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
  const [title, setTitle] = useState('');
  const [selectedType, setSelectedType] = useState('');

  return (
    <>
      <NewPubBtn onClick={handleClickOpen}>New publication</NewPubBtn>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="new-publication-dialog-title"
        aria-describedby="new-publication-dialog-description"
        fullScreen={true}
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        <DialogTitle 
          id="new-publication-dialog-title"
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
          <DialogContentText id="new-publication-dialog-description">
            {/* PUBLICATION DETAILS */}
            <PubDetailsSection 
              title={title}
              selectedType={selectedType}
            />
            <InnerHorizontalRule />

            {/* ATTACHMENTS  */}
            <div className={styles.sectionTitle}>Attachments</div>
            <div className={styles.labelsRow}>Publication File / Link</div>
            <InnerHorizontalRule />

            {/* PUBLICATION STATUS */}
            <div className={styles.sectionTitle}>Publication Status</div>
            <InnerHorizontalRule />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SaveDraftBtn onClick={handleClose} />
          <PublishBtn onClick={handleClose} />
        </DialogActions>
      </Dialog>
      </>
    );
}

export default NewPublication;