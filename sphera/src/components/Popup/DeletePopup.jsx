import React, {useState} from "react";
import CustomDialog from "./Popup";
import Button from '@material-ui/core/Button';

function DeletePopup(data) {

    const [dataToDelete, setdataToDelete] = useState(data);

    
    const handleDialogClose = () => {
        console.log('Close this popup');
        setdataToDelete(false);
    }

    const handleDialogDelete = () => {
        console.log(dataToDelete);
        setdataToDelete(false);
    }



    return(
        <div>
        <CustomDialog
        isOpen = {dataToDelete}
        handleClose = {handleDialogClose}
        handleContinue = {handleDialogDelete}
        title = {"You haven't added any links or files"}
        subtitle= {"Are you sure you want to publish without them?"}
        closeButtonText = {"No, go back"}
        continueButtonText = {"Yes, Publish"}> 
        </CustomDialog> 
        </div>
    )
    

}

export default DeletePopup;