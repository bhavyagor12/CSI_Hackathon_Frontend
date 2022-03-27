import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import ProjectTable from "../../components/admin/ProjectTable";



function dashboard() {
  return (
    <div className="flex ">
      <Sidebar />
      <ProjectTable/>
    </div>
  );
}

export default dashboard;
