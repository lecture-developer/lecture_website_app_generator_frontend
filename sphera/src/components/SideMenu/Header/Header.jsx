import React, {useState} from 'react';
import { makeStyles } from '@material-ui/styles';
import SetupProgress from "./SetupProgress";


const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '2em',
    paddingBottom: '27px',
    '& h2': {
      fontFamily: 'Playfair Display',
      fontSize: '20px',
      lineHeight: '27px',
      color: '#2D3748',
      marginTop: '4px',
    },
    '& h3': {
      fontFamily: 'Roboto',
      fontWeight: '300',
      fontSize: '16px',
      lineHeight: '19px',
      color: '#828282',
      margin: 0
    }
  }
});

function Header(props){

  const classes = useStyles();
  const greeting = getGreeting();
  const [progress, setProgress] = useState(75);

  function getGreeting(){
    let hours = new Date().getHours();
    if(4 < hours && hours < 12) {
      console.log("hours = "+hours);
      return "Good morning,"
    } else if (hours < 18){
      return "Good afternoon,"
    } else if (hours < 23){
      return "Good evening,"
    } else {
      return "Good night,"
    }
  }

  return (
    <div className={classes.root}>
      <h3>{greeting}</h3>
      <h2>{props.fullName}</h2>
      <SetupProgress
        progress={progress}
        steps = {Math.floor((progress/100)*4)} />
    </div>
  )
}

export default Header;
