import React from "react";
import PropTypes from "prop-types";

function Page(props){

  return (
    <React.Fragment>
      <div onClick = {() => props.whenPageClicked(props.id)}>
        <h3>{props.pageText}</h3>
        <p><em>{props.backgroundImage}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Page.propTypes = {
  pageText: PropTypes.string,
  backgroundImage: PropTypes.string,
  id: PropTypes.string,
  whenPageClicked: PropTypes.func
}

export default Page;