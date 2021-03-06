import React, {useState} from "react";
import Select from 'react-select';
import {makeStyles} from "@material-ui/styles";


/***
 * DropDownFilter is a select item with filter functionality
 * props:
 *  optoins list = [{value:"..","label":".."},....]
 *  handler function filterContent(val) that gets a value and filters the content accordingly
 *
 */
const useStyles = makeStyles(theme => ({
    container: {
        width: "160px",
        borderRadius: "4px",
    },
}));

const selectStyles = {
    control: (base,state) => ({
        ...base,
        boxShadow: "0px 2px 6px rgba(26, 32, 44, 0.04)",
        border: state.isFocused ? "2px solid #7F9CF5" : base.border,
        // borderColor: state.isFocused ? "#7F9CF5" : base.borderColor,
        zIndex: "5",
        "&:hover": {
            borderColor: state.isFocused ? "#7F9CF5" : base.borderColor
        }
    })
}

// props:
// options - array of options
function DropDownFilter(props){

    const [filter,setFilter] = useState("");
    const classes = useStyles();

    function handleChange(selectedOption){
       setFilter(selectedOption);

       // TODO: call another handler that filters the data on screen
       //  props.filterContent();
        console.log("filter selected");
    }

    return (
        <div className={classes.container}>
        <Select
            styles={selectStyles}
            isClearable={false}
            value={filter}
            placeholder={props.placeholder}
            onChange={handleChange}
            options = {props.options} />
            {console.log(filter)}
        </div>
    );
}

export default DropDownFilter;