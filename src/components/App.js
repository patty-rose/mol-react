import MolTitlePage from "./MolTitlePage";
import PageControl from "./PageControl";
import MolPages from "./MolPages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';

function App(){

  //useState hooks:

  
  return (
    <Router>
      <Routes>
        <Route path="/Admin" element={<PageControl />} />
        <Route path="/" element={<MolTitlePage />} />
        <Route path="/MolPages/:id" element={<MolPages />} />
      </Routes>
    </Router>
  );
}

export default App;