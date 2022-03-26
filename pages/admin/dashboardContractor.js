import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import Navbar from "../../components/admin/Navbar.js";
function dashboard() {
  return (
    <div className="flex ">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default dashboard;
