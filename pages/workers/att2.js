import React from "react";
// import attendancee from '../../components/workers/attendancee';
import { VictoryPie } from "victory";

const att2 = () => {
  const data = [
    { quarter: "Protective Equipment Worn", earnings: 6000 },
    { quarter: "Protective Equipment not worn", earnings: 4000 },
    //  { quarter: 3, earnings: 14250 },
    //  { quarter: 4, earnings: 19000 },
    //  { quarter: 5, earnings: 25000 },
    //  { quarter: 6, earnings: 29000 },
  ];
  return (
    <div className="bg-neutral-600">
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

export default att2;
