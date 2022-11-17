import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js';

function PageDetail({ mainPageList }){

  const { thisPageId } = useParams();
  const thisPage = mainPageList.find((page) => page.id === thisPageId);

  const handleDeletingPage = async (id) => {
    await deleteDoc(doc(db, "pages", id));
    // setSelectedPage(null);
  } 

  const handleEditClick = () => {
    // setEditing(true);
  }


  return (
    <React.Fragment>
      <h1>Page Detail</h1>
      <h3>{thisPage.pageText}</h3>
      <p><em>{thisPage.backgroundImage}</em></p>
      <p>{thisPage.pageNumber}</p>
      <Link to={`/admin/editPage/${thisPage.id}`}>Edit</Link>
      {/* <button onClick={onClickingEdit}>Update Page</button>
      <button onClick={onClickingViewPage}>View MOL Page</button> */}

      {/* <Link to="/MolPages" state={{ from: 
      (page.id)}}>View LINKED page</Link> */}

      <button onClick={()=> handleDeletingPage(thisPageId)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

PageDetail.propTypes = {
  page: PropTypes.object
};

export default PageDetail;

//, onClickingDelete, onClickingEdit, onClickingViewPage