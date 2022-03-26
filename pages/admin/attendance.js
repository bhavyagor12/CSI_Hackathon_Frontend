import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import AttendanceTable from "../../components/admin/AttendanceTable.js";
const attendance = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <AttendanceTable />
    </div>
  );
};

export default attendance;
