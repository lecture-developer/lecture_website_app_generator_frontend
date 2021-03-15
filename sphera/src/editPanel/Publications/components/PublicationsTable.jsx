import React from 'react';
import EmptyTable from '../../../libraries/Table/EmptyTable';
import ContentTable from '../../../libraries/Table/Table';
import DeletePopup from "./DeletePopup.jsx";
import noPublicationsImg from '../../../assets/images/no_publication.png';

function PublicationsTable(props) {

    const emptyTableText = ['You haven’t added any publications yet',
                          'Add publications and showcase your work to help students and other academics utilize\
                          your research. You can add papers, abstracts, book reviews, presentations and more.'];

    const popup = <DeletePopup/>
    
    return (props.publicationsList.length !== 0 ? 
        <ContentTable rows={props.publicationsList} headers={props.tableHeaders} removeFunc={props.removeFunc} popup={popup}/> : 
        <EmptyTable img={noPublicationsImg} text={emptyTableText}/>
    );
}

export default PublicationsTable;