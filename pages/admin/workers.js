import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import WorkerTable from "../../components/admin/WorkerTable.js";



function dashboard() {
  return (
    <div className="flex ">
      <Sidebar />
      <WorkerTable/>
    </div>
  );
}

export default dashboard;