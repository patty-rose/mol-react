import Page from "../components/Page";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js';
import { Link } from 'react-router-dom';

function PageList({ mainPageList, setMainPageList, selectedPage, setSelectedPage }){

  const handleChangingSelectedPage = (id) => {
    const selection = mainPageList.filter(page => page.id === id)[0];
    setSelectedPage(selection);
  }

  return (
    <React.Fragment>
      <hr/>
      {mainPageList.map((page) =>
        <Page 
          whenPageClicked={handleChangingSelectedPage}
          pageText={page.pageText}
          backgroundImage={page.backgroundImage} 
          pageNumber={page.pageNumber}
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

