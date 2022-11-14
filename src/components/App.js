import React from "react";
import MolTitlePage from "./MolTitlePage";
import AdminPage from"./AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/" element={<MolTitlePage />} />
      </Routes>
    </Router>
  );
}

export default App;