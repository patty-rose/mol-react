import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Page(props){

  return (
    <React.Fragment>
      <div>
        <h3>{props.pageText}</h3>
        <p><em>{props.backgroundImage}</em></p>
        <p>{props.pageNumber}</p>
        <Link to={`/admin/details/${props.id}`}>more info</Link>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Page.propTypes = {
  pageText: PropTypes.string,
  backgroundImage: PropTypes.string,
  pageNumber: PropTypes.number,
  id: PropTypes.string,
  whenPageClicked: PropTypes.func
}

export default Page;