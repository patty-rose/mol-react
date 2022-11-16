import PropTypes from "prop-types"; 
import ReusableForm from "../components/ReusableForm";
// import { serverTimestamp } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js'

function AddPage(props){

  function handleAddPageSubmission(event) {
    event.preventDefault();
    handleAddingNewPageToList({
      pageText: event.target.pageText.value, 
      backgroundImage: event.target.backgroundImage.value, 
    });
  }

  const handleAddingNewPageToList = async (newPageData) => {
    await addDoc(collection(db, "pages"), newPageData);
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleAddPageSubmission}
        buttonText="Add Page" />
    </React.Fragment>
  );
}

export default AddPage;
