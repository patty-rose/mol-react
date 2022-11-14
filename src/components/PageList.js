import React from "react";
import Page from "./Page";
import PropTypes from "prop-types";

function PageList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.pageList.map((page) =>
        <Page 
          whenPageClicked={props.onPageSelection}
          pageText={page.pageText}
          backgroundImage={page.backgroundImage}
          id={page.id}
          key={page.id}/>
      )}
    </React.Fragment>
  );
}

PageList.propTypes = {
  pageList: PropTypes.array,
  onPageSelection: PropTypes.func
};

export default PageList;

