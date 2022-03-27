import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import AttendanceTable from "../../components/admin/AttendanceTable.js";
import { VictoryPie, VictoryChart } from "victory";

const attendance = () => {
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];
  return (
    <div className="flex bg-gray-900   ">
      <Sidebar />
      <AttendanceTable />
     
    </div>
  );
};

export default attendance;
