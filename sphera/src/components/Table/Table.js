import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CreateIcon from '@material-ui/icons/Create';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import './Table.css';

const useStyles = makeStyles({
    tableBody: {
        display: 'block',
        overflow: 'auto'
    },
    tableContainer: {
        marginTop: '2rem',
        maxHeight: '450px'
    },
    row: {
        height: '2rem'
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
    }
});

function ContentTable(props) {
    const classes = useStyles();

    return (
        <TableContainer className={`${classes.tableContainer} ${classes.relative}`} component={Paper}>
            <Table stickyHeader className={`${classes.table} ${classes.relative}`} size="small"  aria-label="simple table">
                {/* the titles of the table*/}
                <TableHead>
                    <TableRow className={classes.row}>
                        <TableCell className={classes.headers}>Pubication Name</TableCell>
                        <TableCell align="left" className={classes.headers}>Authors</TableCell>
                        <TableCell align="left" className={classes.headers}>Last Edited</TableCell>
                        <TableCell align="right" className={classes.headers}></TableCell>
                        <TableCell align="right" className={classes.headers}></TableCell>
                    </TableRow>
                </TableHead>
                {/* the content of the table*/}
                <TableBody>
                    {props.rows.map((row) => {
                        return <TableRow key={row.publicationName} className={classes.row}>
                            <TableCell align="left" className={`${classes.text} ${classes.mainBlack}`}>{row.publicationName}</TableCell>
                            <TableCell align="left" className={classes.text}>{row.authors}</TableCell>
                            <TableCell align="left" className={classes.text}>{row.lastEdit}</TableCell>
                            <TableCell align="left" className={classes.text}>
                                <IconButton>
                                    <CreateIcon className={classes.clickable} />
                                </IconButton>
                            </TableCell>
                            <TableCell align="left" className={classes.text}>
                                <IconButton>
                                    <MoreVertIcon className={classes.clickable} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
            <div className={classes.fader}/>
        </TableContainer>
    )
}

export default ContentTable; 