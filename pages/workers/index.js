import React from "react";
import Title from "../../components/Title";
import Navbar1 from "../../components/workers/Navbar1";

import Profile from "../../components/workers/center";
function dashboardWorkers() {
  return (
    <div className="">
      <Title title="Home" />
      <Navbar1 />
      <Profile />
    </div>
  );
}

export default dashboardWorkers;
