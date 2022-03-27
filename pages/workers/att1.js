import React from "react";
// import attendancee from '../../components/workers/attendancee';
import Navbar1 from "../../components/workers/Navbar1";
import { VictoryPie } from "victory";

const att1 = () => {
  const data = [
    { quarter: "Present", earnings: 8000 },
    { quarter: "Absent", earnings: 2000 },
    //  { quarter: 3, earnings: 14250 },
    //  { quarter: 4, earnings: 19000 },
    //  { quarter: 5, earnings: 25000 },
    //  { quarter: 6, earnings: 29000 },
  ];
  return (
    <div className="bg-neutral-600">
      <Navbar1 />
      <div className="align-center h-screen">
        <VictoryPie
          data={data}
          x="quarter"
          y="earnings"
          colorScale={["yellow", "blue"]}
        />
      </div>
    </div>
  );
};

export default att1;
