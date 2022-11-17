import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from './firebase.js'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import MolTitlePage from "./pages/MolTitlePage";
import PageControl from "./pages/PageControl";
import MolPages from "./pages/MolPages";
import Error from './pages/Error';
import PageDetail from './pages/PageDetail';
import PageList from './pages/PageList';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';

function App(){

  //useState hooks:
  const [addPageVisible, setAddPageVisible] = useState(false);
  const [mainPageList, setMainPageList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [viewingPage, setViewingPage] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, 'pages'),
      (collectionSnapshot) => {
        const pages = [];
        collectionSnapshot.forEach((doc) => {
          pages.push({
            pageText: doc.data().pageText,
            backgroundImage: doc.data().backgroundImage,
            pageNumber: doc.data().pageNumber,
            id: doc.id,
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

  console.log(mainPageList);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MolTitlePage />} />
        <Route path="/MolPages/:thisPageNumber" element={<MolPages mainPageList = {mainPageList}/>} />

        <Route 
          path="/admin" 
          element={<PageControl />} >

          <Route index element={<PageList mainPageList = {mainPageList} setMainPageList = {setMainPageList} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />} />
          <Route path='AddPage' element={<AddPage />} />
          <Route path='details/:thisPageId' element={<PageDetail mainPageList = {mainPageList} />}/>
          <Route path='editPage/:thisPageId' element={<EditPage mainPageList = {mainPageList} />}/>

        </Route>

        <Route path='*' element={<Error />} />
        
      </Routes>
    </Router>
  );
}

export default App;