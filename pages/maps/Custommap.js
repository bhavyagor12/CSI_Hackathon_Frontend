import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";

function Custommap() {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
      <YourComponent />
    </Wrapper>
  );
}

export default Custommap;
