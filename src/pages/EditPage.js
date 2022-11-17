import React from "react";
import ReusableForm from "../components/ReusableForm";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js';
import { useNavigate } from 'react-router-dom';

function EditPage ({ mainPageList }) {

  const navigate = useNavigate();

  const { thisPageId } = useParams();
  const thisPage = mainPageList.find((page) => page.id === thisPageId);

  const handleEditingPageInList = async (pageToEdit) => {
    const pageRef = doc(db, "pages", pageToEdit.id);
    await updateDoc(pageRef, pageToEdit);
  }

  function handleEditPageSubmission(event) {
    event.preventDefault();
    handleEditingPageInList({
      pageText: event.target.pageText.value, 
      backgroundImage: event.target.backgroundImage.value, 
      pageNumber: event.target.pageNumber.value,
      id: thisPage.id
    });
    navigate('/admin');
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPageSubmission} 
        buttonText="Update Page" />
    </React.Fragment>
  );
}

EditPage.propTypes = {
  onEditPage: PropTypes.func,
  page: PropTypes.object
};

export default EditPage;
