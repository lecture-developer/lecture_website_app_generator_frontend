import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Tooltip from '@material-ui/core/Tooltip';

import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import UnpublishIcon from '../Icons/UnpublishIcon';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import trim from '../SharedObjects/WordTrimmer';

import './Table.css';

const useStyles = makeStyles({
    tableBody: {
        display: 'block',
        overflow: 'auto'
    },
    tableContainer: {
        marginTop: '2rem',
        maxHeight: '53vh'
    },
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
    fader: {
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,f4f4f4+100&0+0,1+75 */
        background: '-moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(247,247,247,1) 75%, rgba(244,244,244,1) 100%)', /* FF3.6-15 */
        background: '-webkit-linear-gradient(top,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 75%,rgba(244,244,244,1) 100%)', /* Chrome10-25,Safari5.1-6 */
        background: 'linear-gradient(to bottom,  rgba(255,255,255,0) 0%,rgba(247,247,247,1) 75%,rgba(244,244,244,1) 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#00ffffff", endColorstr="#f4f4f4",GradientType=0 )', /* IE6-9 */
        width: '100%',
        height: '25px',
        position: 'sticky',
        bottom: 0,
        left: 0
    },
    icon: {
        color: '#828282',
        marginRight: '0.5rem'
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
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const toolTipStyle = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
      marginTop: '0.5rem',
      fontSize: '1rem',
      fontWeight: '400'
    }
  }));

function ContentTable(props) {
    const classes = useStyles();
    const toolTipClass = toolTipStyle();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const maxPublicationNameLength = 80;

    return (
        <TableContainer className={`${classes.tableContainer} ${classes.relative}`} component={Paper}>
            <Table stickyHeader className={`${classes.table} ${classes.relative}`} size="small" aria-label="simple table">
                {/* the titles of the table*/}
                <TableHead>
                    <TableRow className={classes.row}>
                        {props.headers.map(header => {
                            return <TableCell align="left" className={classes.headers}>{header}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                {/* the content of the table*/}
                <TableBody>
                    {props.rows.map((row, i) => {
                        return <TableRow key={row.publicationName + i} className={classes.row}>

                            <Tooltip title={row.publicationName}  classes={toolTipClass} arrow placement='bottom'>
                                <TableCell align="left" className={`${classes.text} ${classes.mainBlack}`}>
                                    {trim(row.publicationName, maxPublicationNameLength)}
                                </TableCell>
                            </Tooltip>
                            <TableCell align="left" className={classes.text}>{row.authors}</TableCell>
                            <TableCell align="left" className={classes.text}>{row.lastEdit}</TableCell>
                            <TableCell align="left" className={classes.text}>
                                <IconButton>
                                    <CreateIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell align="left" className={classes.text}>
                                <IconButton onClick={handleClickMenu}>
                                    <MoreVertIcon />
                                </IconButton>
                            </TableCell>
                            {/* create a menu for each row */}
                            <StyledMenu anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleCloseMenu}
                                className={classes.text}>
                                <StyledMenuItem><CreateIcon className={classes.icon} />Edit</StyledMenuItem>
                                <StyledMenuItem><UnpublishIcon color={'#828282'} className={classes.icon} />Unpublish</StyledMenuItem>
                                <StyledMenuItem><VisibilityIcon className={classes.icon} />View on site</StyledMenuItem>
                                <StyledMenuItem><LinkIcon className={classes.icon} />Get direct link</StyledMenuItem>
                                <StyledMenuItem><DeleteIcon className={classes.icon} />Delete</StyledMenuItem>
                            </StyledMenu>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            <div className={classes.fader} />
        </TableContainer>
    )
}

export default ContentTable; 