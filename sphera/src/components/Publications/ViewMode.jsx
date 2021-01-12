import React, {useState} from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    label: {
        textTransform:"capitalize",
    },
    active: {
        background: "#ffffff",
        border: "none",
        boxShadow: "box-shadow: 2px 0px 8px rgba(26, 32, 44, 0.08)",
        zIndex: "4",
    },
    inactive: {
        height: "32px",
        border: "none",
        margin: "3px 0",
        background:"#E2E8F0",
        boxShadow: "inset 0px 2px 6px rgba(26, 32, 44, 0.08)"
    }
});


function ViewMode(props){
    const[activeList,setActiveList] = useState(true);
    const classes = useStyles();

    function handleClickList(){
        setActiveList(true);
    }
    function handleClickGrid(){
        setActiveList(false);
    }

    return (
      <ButtonGroup
        variant="outlined">
          <Button
              classes={{
              label: classes.label,
              root: activeList ? classes.active : classes.inactive
          }}
          onClick={handleClickList}>list</Button>
          <Button
              classes={{
              label: classes.label,
              root: activeList ? classes.inactive : classes.active
          }}
          onClick={handleClickGrid}>Grid</Button>
      </ButtonGroup>
    );

}

export default ViewMode;