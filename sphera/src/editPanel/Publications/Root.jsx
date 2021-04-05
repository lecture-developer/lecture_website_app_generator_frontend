import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import PublicationsHeader from "./components/PublicationsHeader";
import Filters from "./components/Filters";
import ContentTable from "./components/Table/Table";
import EmptyTable from "./components/EmptyTable";
import DisplayGrid from "./components/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    // width: "100%",
    // padding: "64px",
    // height: "90vh",
  }
}));

function createData(publicationName, authors, lastEdit,content,tags,isDraft) {
  return { publicationName, authors, lastEdit, content, tags, isDraft };
}


let rows = [
  createData('1A stable algorithm for numerical matrix exponent', 'You and Shlomo Yossi', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"],true),
  createData('2A stable algorithm for numerical matrix exponent max max max max max max max max max max max max max', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],false),
  createData('3A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],true),
  createData('4A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"],false),
  createData('5A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],true),
  createData('6A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],false),
  createData('7A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"],true),
  createData('8A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],true),
  createData('9A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],false),
  createData('10A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"],true),
  createData('11A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],false),
  createData('12A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],true),
];



let topics = ["algorithms","snow","music"];
let types = ["paper","website","movie"];
let years = [2015,2018,2021];



function PublicationsRoot(){
  const classes = useStyles();
  const tableHeaders = ['Pubication Name','', 'Authors', 'Last Edited', '', ''];
  const [displayList, setDisplayList] = useState(true);
  const [publicationsList, setPublicationsList] = useState(rows); // used to change the data automaticly

  /*Remove publication from list  */
  const removePublication=(publicationId)=>{
    console.log("Start remove publication " + publicationId);
    var array = [...publicationsList]; // make a separate copy of the array
    if (publicationId !== -1) {
      array.splice(publicationId, 1);
      setPublicationsList(array); // reset publication list
      console.log("Publications list updaated");
    }
  }

  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount={publicationsList.length} publicationsBtn={publicationsList.length !== 0 ? true : false}/>
    <Filters
      topics={topics}
      types={types}
      years={years}
    displayList={setDisplayList}/>
    {displayList ? publicationsList.length !== 0 ? <ContentTable rows={publicationsList} headers = {tableHeaders} removeFunc={removePublication} /> : <EmptyTable/> : <DisplayGrid rows={publicationsList}/>}

    </div>
  );

}

export default PublicationsRoot;
