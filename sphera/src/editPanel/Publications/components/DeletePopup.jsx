import React from "react";
import CustomDialog from "../../../libraries/Popup/Popup";

// delete publication approved
function deleteApproved(setDeleteEl, setAnchorEl, selectedPublication, removeFunc) {
    console.log("Remove publication");
    console.log(selectedPublication);
    removeFunc(selectedPublication);
    //Close both delete dialog and row menu
    setDeleteEl(false);
    setAnchorEl(false);
}

    // delete publication not aproved or stoped
function deleteReject(setDeleteEl, setAnchorEl){
    console.log("Dont Remove");
    //Close both delete dialog and row menu
    setDeleteEl(false);
    setAnchorEl(false);
    }

export default function DeletePopup(props) {
    return(
        <div>
        <CustomDialog
        isOpen = {props.isDeletePopup}
        handleClose = {()=>{deleteReject(props.setIsDeletePopup, props.setAnchorEl)}}
        handleContinue = {()=>{deleteApproved(props.setIsDeletePopup, props.setAnchorEl, props.selectedPublication, props.removeFunc)}}
        title = {"Delete Publications?"}
        subtitle= {"publications will be deleted immediately. You can’t undo this action."}
        closeButtonText = {"Cancel"}
        continueButtonText = {"Delete"}> 
        </CustomDialog> 
        </div>
    )

}