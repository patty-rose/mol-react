import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPageForm (props) {
  const { page } = props;

  function handleEditPageFormSubmission(event) {
    event.preventDefault();
    props.onEditPage({
      pageText: event.target.pageText.value, 
      backgroundImage: event.target.backgroundImage.value, 
      id: page.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditPageFormSubmission} 
        buttonText="Update Page" />
    </React.Fragment>
  );
}

EditPageForm.propTypes = {
  onEditPage: PropTypes.func,
  page: PropTypes.object
};

export default EditPageForm;
