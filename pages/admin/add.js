import React from "react";
import Form from "../../components/workers/addformm";
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
