import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import PublicationsHeader from "./components/PublicationsHeader";
import Filters from "./components/Filters";
import ContentTable from "./components/Table/Table";
import EmptyTable from "./components/EmptyTable";
import DisplayGrid from "./components/Grid";

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
  createData('1A stable algorithm for numerical matrix exponent', 'You and Shlomo Yossi', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "paper", 2015),
  createData('2A stable algorithm for numerical matrix exponent max max max max max max max max max max max max max', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],  "music", "website", 2018),
  createData('3A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"], "snow", "movie", 2017),
  createData('4A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "website", 2015),
  createData('5A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[],  "music", "website", 2017),
  createData('6A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],"snow", "paper", 2017),
  createData('7A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "music", "movie", 2018),
  createData('8A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[], "snow", "website", 2020),
  createData('9A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"], "music", "movie", 2015),
  createData('10A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38', "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper","X","Y","Z","w"], "algorithms", "paper", 2017),
  createData('11A stable algorithm for numerical matrix exponent max max max..', 'You and Shlomo Y..', '22/2/20  |  22:38', "lorem",[], "algorithms", "movie", 2020),
  createData('12A stable algorithm for numerical matrix exponent', 'You and Shlomo Y..', '22/2/20  |  22:38',"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis vulputate turpis. Proin lobortis enim enim, blandit rhoncus diam rhoncus non. Morbi non est in arcu ultrices porttitor in a massa. Donec non condimentum risus. Vestibulum sagittis nibh nec risus pulvinar, ut tristique justo convallis.",["published","2016","paper"],"snow", "paper", 2015),
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

  function filterByValue(filterName,value){
    filteredContent = [];
    setIsFiltered(false);
    console.log("filtering by: "+filterName+", "+value);
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
    console.log(filteredContent);
    setIsFiltered(true);
  }


  return (
    <div className ={classes.root}>
    <PublicationsHeader
    publicationsAmount={publicationsList.length} publicationsBtn={publicationsList.length !== 0 ? true : false}/>
    <Filters
      topics={topics}
      types={types}
      years={years}
    displayList={setDisplayList}
    filterContent={filterByValue}/>

      {rows.length > 0  && !isFiltered ? // if the content is not filtered - display all rows
          displayList ?
              <ContentTable rows={rows} headers = {tableHeaders} removeFunc={removePublication}/> :  <DisplayGrid rows={rows}/> :
          isFiltered ? // otherwise, display only the filtered content
              displayList ?
                  <ContentTable rows={filteredContent} headers = {tableHeaders} removeFunc={removePublication}/> :  <DisplayGrid rows={filteredContent}/> : <EmptyTable/>}

      {/*{displayList ? publicationsList.length !== 0 ? <ContentTable rows={publicationsList} headers = {tableHeaders} removeFunc={removePublication} /> : <EmptyTable/> : <DisplayGrid rows={publicationsList}/>}*/}

    </div>
  );

}

export default PublicationsRoot;
