import React from "react";
import Navbar from "../../components/admin/Navbar";
import Sidebar from "../../components/admin/Sidebar";
import ProjectTable from "../../components/admin/ProjectTable";
const admin = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <ProjectTable />
    </div>
  );
};

export default admin;
