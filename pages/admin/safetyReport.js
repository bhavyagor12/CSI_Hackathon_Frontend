import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import SafetyTable from "../../components/admin/SafetyTable";

const safetyReport = () => {
  return (
    <div className="flex ">
      <Sidebar/>
      <SafetyTable/>
    </div>
  )
};

export default safetyReport;
