import React from "react";
import Form from "../../components/admin/addWorkerform";
import Sidebar from "../../components/admin/Sidebar";


const add = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Form />
    </div>
  );
};

export default add;
