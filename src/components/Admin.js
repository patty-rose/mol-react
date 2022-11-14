import Navbar from "./Navbar";
import AddPage from "./AddPage";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js'

function Admin(){

  const [addPageVisible, setAddPageVisible] = useState(false);

  const [pageList, setPageList] = useState([]);

  const [selectedPage, setSelectedPage] = useState(null);

  const [editing, setEditing] = useState(false);

  const [error, setError] = useState(null);

  const handleClick = () => {
    if (selectedPage != null) {
      setAddPageVisible(false);
      setSelectedPage(null);
      setEditing(false);
    } else {
      setAddPageVisible(true);
    }
  }

  const handleAddingNewPageToList = async (newPageData) => {
    await addDoc(collection(db, "pages"), newPageData);
    setAddPageVisible(false);
  }

  let currentlyVisibleState = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editing) {
    currentlyVisibleState = <p>editing</p>
  } else if (selectedPage != null) {
    currentlyVisibleState = <p>ticket detail</p>
  } else if (addPageVisible) {
    currentlyVisibleState = <AddPage onNewPageCreation={handleAddingNewPageToList}/>
  } else {
    currentlyVisibleState = <p>list of pages</p>
  }

  return (
    <React.Fragment>
      <Navbar />
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>Click</button>}
    </React.Fragment>
  );
}

export default Admin;