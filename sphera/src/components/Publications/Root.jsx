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

function createData(publicationName, authors, lastEdit,content,tags, topic, type, year) {
  return { publicationName, authors, lastEdit, content, tags, topic, type, year };
}

let rows = [
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Yossi', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "paper", 2015),
  createData('A stable algorithm for numerical matrix exponent max max max max max max max max max max max max max', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],  "music", "website", 2018),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"], "snow", "movie", 2017),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "website", 2015),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],  "music", "website", 2017),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],"snow", "paper", 2017),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "music", "movie", 2018),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[], "snow", "website", 2020),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"], "music", "movie", 2015),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "paper", 2017),
  createData('A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[], "algorithms", "movie", 2020),
  createData('A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],"snow", "paper", 2015),
];
let filteredContent = [];
function getFilter(value){
  let filter = new Set();
  for (let r of rows) {
    if(value === "topic"){
      filter.add(r.topic.toLowerCase().trim());
    } else if (value === "type"){
      filter.add(r.type.toLowerCase().trim());
    } else if (value === "year") {
      filter.add(r.year.toString().toLowerCase().trim());
    } else {
      console.log("getFilter - incorrect value");
      return;
    }
  }
  return Array.from(filter);
}

let topics = getFilter("topic");
let types = getFilter("type");
let years = getFilter("year");


function PublicationsRoot(){
  const classes = useStyles();
  const [isFiltered, setIsFiltered] = useState(false);
  const tableHeaders = ['Pubication Name', 'Authors', 'Last Edited', '', ''];
  const [displayList, setDisplayList] = useState(true);
  // let rows = [];

  function filterByValue(filterName,value){
    filteredContent = [];
    if(filterName === "topic"){
      for (let r of rows){
        if(r.topic.toString().toLowerCase().trim() === value){
          filteredContent.push(r);
        }
      }
    } else if (filterName === "type"){
      for (let r of rows){
        if(r.type.toString().toLowerCase().trim() === value){
          filteredContent.push(r);
        }
      }
      return filteredContent;
    } else if (filterName === "year") {
      for (let r of rows){
        if(r.year.toString().toLowerCase().trim() === value){
          filteredContent.push(r);
        }
      }
    } else {
      console.log("error in filters");
    }
    setIsFiltered(false);
    setIsFiltered(true);

  }

  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount={rows.length} publicationsBtn={rows.length !== 0}/>
      {rows.length > 0  ?
    <Filters
      topics={topics}
      types={types}
      years={years}
      filterFunction = {filterByValue}
      displayList={setDisplayList} />
      : null }
      { /* really complex rendering */ }
    {rows.length > 0  && !isFiltered ? // if the content is not filtered - display all rows
          displayList ?
                <ContentTable rows={rows} headers = {tableHeaders}/> :  <DisplayGrid rows={rows}/> :
        isFiltered ? // otherwise, display only the filtered content
            displayList ?
                <ContentTable rows={filteredContent} headers = {tableHeaders}/> :  <DisplayGrid rows={filteredContent}/> : <EmptyTable/>}

    </div>
  );

}


export default PublicationsRoot;
