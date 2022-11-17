import Navbar from "../components/Navbar";
import AddPage from "./AddPage";
import EditPageForm from "./EditPage";
import PageList from "./PageList";
import PageDetail from "./PageDetail";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js'
import { Link, Outlet } from 'react-router-dom';

function PageControl(){

  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
}

export default PageControl;