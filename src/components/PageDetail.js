import React from "react";
import PropTypes from "prop-types";

function PageDetail(props){
  const { page, onClickingDelete, onClickingEdit } = props; 

  return (
    <React.Fragment>
      <h1>Page Detail</h1>
      <h3>{page.pageText}</h3>
      <p><em>{page.backgroundImage}</em></p>
      <button onClick={onClickingEdit}>Update Page</button>
      <button onClick={()=> onClickingDelete(page.id)}>Close Page</button>
      <hr/>
    </React.Fragment>
  );
}

PageDetail.propTypes = {
  page: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
};

export default PageDetail;