import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    '& p': {
        fontFamily: "Roboto",
        fontWeight: 300,
        fontSize: 14,
        lineHeight: '16px',
        color: "#828282",
        margin: [[4,0]]
    }
  },
  bar:{
    height: '6px',
    margin: 0,
    backgroundColor: '#E2E8F0'
  },
    barColor: {
        backgroundColor: props => props.progress === 100 ? "#82EC86" : '#5A67D8',
    }
}));

function SetupProgress(props){
  const classes = useStyles(props);
  const [progress, setProgress] = useState(props.progress);
  const [percantage, setPercantage] = useState(props.steps);

  return (
    <div className={classes.root}>
      <p>Site setup</p>
      <LinearProgress classes={{barColorPrimary: classes.barColor}} className={classes.bar} variant="determinate" value={progress} />
      <p>{percantage === 4 ? "Completed!" : percantage+"/4 completed"}</p>
    </div>
);

}

export default SetupProgress;
