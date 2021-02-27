import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DeleteDialaog(someParameter, deleteEl, setDeleteEl) {


    const deletePunlication = () => {
        console.log("Ask Remove");
    }

    const deletePunlicationAproved = () => {
        console.log("Remove");
        console.log(someParameter);
        setDeleteEl(false);
    }


    const deletePunlicationNotAproved = () => {
        console.log("Not Remove");
        setDeleteEl(false);
    }


    return (
        <Dialog
        open = { deleteEl }
        onClose = { deletePunlicationNotAproved }
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description" >
            <DialogTitle id="alert-dialog-title">{"Delete Publications?"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    2 publications will be deleted immediately. You can’t undo this action.
                 </DialogContentText>
                 </DialogContent>
                 <DialogActions>
                    <Button onClick={()=>deletePunlicationNotAproved} color="primary">
                         Cancel
                    </Button>
                    <Button onClick={deletePunlicationAproved} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog >
    );
}

export default DeleteDialaog;