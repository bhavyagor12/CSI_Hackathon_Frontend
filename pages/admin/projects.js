import React from "react";
import Sidebar from "../../components/admin/Sidebar.js";
import Navbar from "../../components/admin/Navbar.js";
import Form from "../../components/admin/Projects";
const projects = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <Form />
    </div>
  );
};

export default projects;
