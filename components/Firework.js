import { Fireworks } from "fireworks-js/dist/react";

const Firework = () => {
  const options = {
    speed: 5,
    particles: 100,
    hue: {
      min: 0,
      max: 345,
    },
    delay: {
      min: 15,
      max: 15,
    },
    boundaries: {
      visible: false,
    },
  };

  return (
    <Fireworks options={options} className="w-full h-full fixed top-0 left-0" />
  );
};

export default Firework;
