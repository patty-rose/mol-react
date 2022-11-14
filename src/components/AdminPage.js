import React from "react";
import Navbar from "./Navbar";
import AddPage from "./AddPage";


function AdminPage(){


  let currentlyVisibleState = null;

  return (
    <React.Fragment>
      <Navbar />
      {currentlyVisibleState}
    </React.Fragment>
  );
}

export default AdminPage;