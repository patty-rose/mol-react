import PropTypes from "prop-types"; 
import ReusableForm from "../components/ReusableForm";
// import { serverTimestamp } from "firebase/firestore";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js';
import { useNavigate } from 'react-router-dom';

function AddPage(props){

  const navigate = useNavigate();

  function handleAddPageSubmission(event) {
    event.preventDefault();
    handleAddingNewPageToList({
      pageText: event.target.pageText.value, 
      backgroundImage: event.target.backgroundImage.value, 
      pageNumber: parseInt(event.target.pageNumber.value)
    });
    navigate('/admin');
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
