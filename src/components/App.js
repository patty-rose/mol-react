import MolTitlePage from "./MolTitlePage";
import Admin from"./Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App(){

  //useState hooks:

  
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/" element={<MolTitlePage />} />
      </Routes>
    </Router>
  );
}

export default App;