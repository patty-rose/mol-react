import Page from "../components/Page";
import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js'

function PageList({ mainPageList, setMainPageList, selectedPage, setSelectedPage }){

  const handleChangingSelectedPage = (id) => {
    const selection = mainPageList.filter(page => page.id === id)[0];
    setSelectedPage(selection);
  }

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, 'pages'),
      (collectionSnapshot) => {
        const pages = [];
        collectionSnapshot.forEach((doc) => {
          pages.push({
            pageText: doc.data().pageText,
            backgroundImage: doc.data().backgroundImage,
            id: doc.id
          });
        });
        setMainPageList(pages);
      },
      (error) => {
        //add more
      }
    );
    return () => unSubscribe();
  }, []);

  return (
    <React.Fragment>
      <hr/>
      {mainPageList.map((page) =>
        <Page 
          whenPageClicked={handleChangingSelectedPage}
          pageText={page.pageText}
          backgroundImage={page.backgroundImage}
          id={page.id}/>
      )}
    </React.Fragment>
  );
}

PageList.propTypes = {
  pageList: PropTypes.array,
  onPageSelection: PropTypes.func
};

export default PageList;

