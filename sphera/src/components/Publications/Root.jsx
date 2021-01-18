import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import PublicationsHeader from "./PublicationsHeader";
import Filters from "./Filters";
import ContentTable from "../Table/Table";
import EmptyTable from "../Table/EmptyTable";
import DisplayGrid from "../Grid/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: "64px",
    height: "90vh",
  }
}));

function createData(publicationName, authors, lastEdit,content,tags) {
  return { publicationName, authors, lastEdit, content, tags };
}

let rows = [
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Yossi', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"]),
  createData('A stable algorithm for numerical matrix exponent max max max max max max max max max max max max max', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"]),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"]),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"]),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[]),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"]),
];

let topics = ["algorithms","snow","music"];
let types = ["paper","website","movie"];
let years = [2015,2018,2020];


function PublicationsRoot(){
  const classes = useStyles();
  const tableHeaders = ['Pubication Name', 'Authors', 'Last Edited', '', ''];
  const [displayList, setDisplayList] = useState(true);



  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount={rows.length} publicationsBtn={rows.length !== 0 ? true : false}/>
    <Filters
      topics={topics}
      types={types}
      years={years}
    displayList={setDisplayList}/>
    {displayList ? rows.length !== 0 ? <ContentTable rows={rows} headers = {tableHeaders}/> : <EmptyTable/> : <DisplayGrid rows={rows}/>}

    </div>
  );

}

export default PublicationsRoot;
