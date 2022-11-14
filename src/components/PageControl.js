import Navbar from "./Navbar";
import AddPage from "./AddPage";
import EditPageForm from "./EditPageForm";
import PageList from "./PageList";
import PageDetail from "./PageDetail";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js'

function PageControl(){
  //useState hooks:
  const [addPageVisible, setAddPageVisible] = useState(false);
  const [mainPageList, setMainPageList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  //useEffect hooks:
  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, 'pages'),
      (collectionSnapshot) => {
        const pages = [];
        collectionSnapshot.forEach((doc) => {
          pages.push({
            pageText: doc.data().pageText,
            backgroundImage: doc.data().backgroundImage,
            id: doc.id
          });
        });
        setMainPageList(pages);
      },
      (error) => {
        //add more
      }
    );
    return () => unSubscribe();
  }, []);



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

  const handleDeletingPage = async (id) => {
    await deleteDoc(doc(db, "pages", id));
    setSelectedPage(null);
  } 

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleEditingPageInList = async (pageToEdit) => {
    const pageRef = doc(db, "pages", pageToEdit.id);
    await updateDoc(pageRef, pageToEdit);
    setEditing(false);
    setSelectedPage(null);
  }

  const handleChangingSelectedPage = (id) => {
    const selection = mainPageList.filter(page => page.id === id)[0];
    setSelectedPage(selection);
  }

  let currentlyVisibleState = null;

  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editing) {
    currentlyVisibleState = <EditPageForm 
    page = {selectedPage} 
    onEditPage = {handleEditingPageInList} />;
  } else if (selectedPage != null) {
    currentlyVisibleState = currentlyVisibleState = 
    <PageDetail 
      page={selectedPage} 
      onClickingDelete={handleDeletingPage}
      onClickingEdit = {handleEditClick} />;
      // buttonText = "Return to Page List";
  } else if (addPageVisible) {
    currentlyVisibleState = <AddPage onNewPageCreation={handleAddingNewPageToList}/>
  } else {
    currentlyVisibleState = <PageList 
    onPageSelection={handleChangingSelectedPage} 
    pageList={mainPageList} />;
  }

  return (
    <React.Fragment>
      <Navbar />
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>Click</button>}
    </React.Fragment>
  );
}

export default PageControl;