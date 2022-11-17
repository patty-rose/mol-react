import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='pageText'
          placeholder='Page text:' />
        <input
          type='text'
          name='backgroundImage'
          placeholder='Background Image:' />
          <input
          type='number'
          name='pageNumber'
          placeholder='Page Number:' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;