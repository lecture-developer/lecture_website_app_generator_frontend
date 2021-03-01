import React from "react";
import CustomDialog from "./Popup";

function DeletePopup(props) {
    return(
        <div>
        <CustomDialog
        isOpen = {props.dataToDelete}
        handleClose = {props.handleDialogClose}
        handleContinue = {props.handleDialogDelete}
        title = {"Delete Publications?"}
        subtitle= {"publications will be deleted immediately. You can’t undo this action."}
        closeButtonText = {"Cancel"}
        continueButtonText = {"Delete"}> 
        </CustomDialog> 
        </div>
    )

}

export default DeletePopup;