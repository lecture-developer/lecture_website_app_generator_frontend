import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import PublicationsIcon from '../../../assets/Icons/PublicationsIcon';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles({
    row: {
        height: '2rem',
        zIndex: "0",
    },
    headers: {
        backgroundColor: '#E2E8F0',
        color: '#828282'
    },
    text: {
        color: '#828282',
        fontSize: '1rem',
        fontWeight: '400'
    },
    mainBlack: {
        color: '#2D3748'
    },
    relative: {
        position: 'relative'
    },
   
    icon: {
        color: '#828282',
        marginRight: '0.5rem'
    },
    padding: {
        paddingTop: '0',
        paddingBottom: '0'
        
    }
    
});


const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
        backgroundColor: '#F1F3F5'
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        borderBottom: '1px solid #d3d4d5',
        paddingRight: '5rem',
        paddingLeft: '1rem',
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function DraftMenu(props){
    const classes = useStyles();

    return(
        <StyledMenu anchorEl={props.anchorEl}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleCloseMenu}
        /*The solution i found to override MuiList-padding*/
        MenuListProps={{classes: { padding: classes.padding } }}
        className={classes.text}>
        <StyledMenuItem><CreateIcon className={classes.icon} />Edit</StyledMenuItem>
        <StyledMenuItem><PublicationsIcon color={'#828282'} className={classes.icon} />Publish</StyledMenuItem>
        <StyledMenuItem onClick={props.openDeletePopup}><DeleteIcon className={classes.icon} />Delete </StyledMenuItem>
    </StyledMenu>);
}
 export default DraftMenu;