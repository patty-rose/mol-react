import React from "react";
import PropTypes from "prop-types"; 
import ReusableForm from "./ReusableForm";
// import { serverTimestamp } from "firebase/firestore";

function AddPage(props){

  function handleAddPageSubmission(event) {
    event.preventDefault();
    props.onNewPageCreation({
      pageText: event.target.names.value, 
      backgroundImage: event.target.backgroundImage.value, 
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleAddPageSubmission}
        buttonText="Add Page" />
    </React.Fragment>
  );
}

AddPage.propTypes = {
  onNewPageCreation: PropTypes.func
};

export default AddPage;
