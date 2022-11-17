import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import benchImg from '../img/bench.png';
import { Link, useParams } from "react-router-dom";
import { collection, addDoc, onSnapshot, updateDoc, doc, deleteDoc, query, orderBy } from "firebase/firestore";
import db from '../firebase.js';

function MolPages( {mainPageList} ){

  const { thisPageNumber } = useParams();
  const numPageNum = parseInt(thisPageNumber);
  const thisPage = mainPageList.find((page) => page.pageNumber === numPageNum);

  return (
    <>
      <p>{thisPage.backgroundImage}</p>
      <p>{thisPage.pageText}</p>
      <Link to={`/MolPages/${numPageNum - 1}`}>Go this way!</Link>
      <Link to={`/MolPages/${numPageNum + 1}`}>Go that way!</Link>
    </>
  );
}

export default MolPages;