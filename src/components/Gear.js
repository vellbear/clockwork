import React from "react";
import GearSVG from "../assets/gear.svg";
import Gear2SVG from "../assets/gear2.svg";
import Gear3SVG from "../assets/gear3.svg";
import Gear4SVG from "../assets/gear4.svg";
import Gear5SVG from "../assets/gear5.svg";

function Gear() {
  return (
    <>
      <img
        src={GearSVG}
        alt="gear.svg"
        height="500px"
        width="500px"
        className="absolute animate-rotate-step-cc right-[50px] bottom-[10px] overflow-hidden"
      />
      <img
        src={Gear2SVG}
        alt="gear2.svg"
        height="300px"
        width="300px"
        className="absolute animate-rotate-step right-[580px] bottom-[80px] overflow-hidden"
      />
      <img
        src={Gear3SVG}
        alt="gear3.svg"
        height="400px"
        width="400px"
        className="absolute animate-rotate-step-cc right-[900px] bottom-[120px] overflow-hidden"
      />
      <img
        src={Gear4SVG}
        alt="gear4.svg"
        height="200px"
        width="200px"
        className="absolute animate-rotate-step right-[500px] bottom-[410px] overflow-hidden"
      />
      <img
        src={Gear5SVG}
        alt="gear5.svg"
        height="150px"
        width="150px"
        className="absolute animate-rotate-step-cc right-[760px] bottom-[410px] overflow-hidden"
      />
    </>
  );
}

export default Gear;
