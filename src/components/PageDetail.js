import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PageDetail(props){
  const { page, onClickingDelete, onClickingEdit, onClickingViewPage } = props; 
  console.log(props);

  return (
    <React.Fragment>
      <h1>Page Detail</h1>
      <h3>{page.pageText}</h3>
      <p><em>{page.backgroundImage}</em></p>
      <button onClick={onClickingEdit}>Update Page</button>
      <button onClick={onClickingViewPage}>View MOL Page</button>

      <Link to="/MolPages" state={{ from: 
      (page.id)}}>View LINKED page</Link>

      <button onClick={()=> onClickingDelete(page.id)}>Close Ticket</button>
      <hr/>
    </React.Fragment>
  );
}

PageDetail.propTypes = {
  page: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingViewPage: PropTypes.func
};

export default PageDetail;