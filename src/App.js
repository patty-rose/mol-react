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

function App(){

  //useState hooks:
  const [addPageVisible, setAddPageVisible] = useState(false);
  const [mainPageList, setMainPageList] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [viewingPage, setViewingPage] = useState(false);
  const [error, setError] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MolTitlePage />} />
        <Route path="/MolPages/:id" element={<MolPages />} />

        <Route 
          path="/admin" 
          element={<PageControl />} >

          <Route index element={<PageList mainPageList = {mainPageList} setMainPageList = {setMainPageList} selectedPage = {selectedPage} setSelectedPage = {setSelectedPage} />} />
          <Route path='AddPage' element={<AddPage />} />
          <Route path='details' element={<PageDetail />} />

        </Route>

        <Route path='*' element={<Error />} />
        
      </Routes>
    </Router>
  );
}

export default App;