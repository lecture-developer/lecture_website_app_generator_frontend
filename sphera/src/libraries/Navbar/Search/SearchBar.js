import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#F1F3F5',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    paddingLeft: '0.5rem',
    width: '100%',
    display: 'flex',
    flexGrow: 'row',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(1, 2),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    color: '#828282'
  },
  inputRoot: {
    color: fade(theme.palette.common.black, 1),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  searchButton: {
    cursor: 'pointer',
    border: '1px solid transparent',
    borderRadius: '5%',
    backgroundColor: 'transparent'
  }
}));

function SearchBar() {
  const [value, setValue] = React.useState({
    value: ''
  });

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  }

  const handleChange = (e) => {
    setValue({
      value: e.target.value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.search} >
        <InputBase
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
        />

        <button className={classes.searchButton} type='submit'>
          <div className={classes.searchIcon}>
            <SearchIcon onClick={handleSubmit}/>
          </div>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
