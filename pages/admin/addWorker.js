import React from "react";
import Form from "../../components/admin/addWorkerform";
import Sidebar from "../../components/admin/Sidebar";


const addWorker = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <Form />
    </div>
  );
};

export default addWorker;
  