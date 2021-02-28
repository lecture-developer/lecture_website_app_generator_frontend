import React, {useState} from "react";
import CustomDialog from "./Popup";
import Button from '@material-ui/core/Button';

function PublishPopup() {

    const [isOpen, setIsOpen] = useState(null);

    const handleDialogOpen = () => {
      setIsOpen(true);
    }
    
    const handleDialogClose = () => {
      setIsOpen(null);
    }

    return(
        <div>
        <Button variant="outlined" color="primary" onClick={handleDialogOpen}>
            Open dialog
        </Button>
            { isOpen ?
        <CustomDialog
        data = {isOpen}
        handleClose = {handleDialogClose}
        handleContinue = {handleDialogClose}
        title = {"You haven't added any links or files"}
        subtitle= {"Are you sure you want to publish without them?"}
        closeButtonText = {"No, go back"}
        continueButtonText = {"Yes, Publish"}> 
        </CustomDialog> 
            :<div></div>
        }
        </div>
    )

}

export default PublishPopup;