import React from "react";
import Image from "next/image";
import GearSVG from "../assets/gear.svg";
import Gear2SVG from "../assets/gear2.svg";
import Gear3SVG from "../assets/gear3.svg";
import Gear4SVG from "../assets/gear4.svg";
import Gear5SVG from "../assets/gear5.svg";
//TODO: Change SVGs into svg components to customize and optimize
function Gear(props) {
  return (
    <>
      <Image
        src={GearSVG}
        alt="gear.svg"
        height="500px"
        width="500px"
        className={`${
          props.toggleTimer ? "" : "animate-rotate-step-cc"
        } absolute right-[50px] bottom-[10px] overflow-hidden`}
      />
      <Image
        src={Gear2SVG}
        alt="gear2.svg"
        height="300px"
        width="300px"
        className={`${
          props.toggleTimer ? "" : "animate-rotate-step"
        } absolute right-[580px] bottom-[80px] overflow-hidden`}
      />
      <Image
        src={Gear3SVG}
        alt="gear3.svg"
        height="400px"
        width="400px"
        className={`${
          props.toggleTimer ? "" : "animate-rotate-step-cc"
        } absolute right-[900px] bottom-[120px] overflow-hidden`}
      />
      <Image
        src={Gear4SVG}
        alt="gear4.svg"
        height="200px"
        width="200px"
        className={`${
          props.toggleTimer ? "" : "animate-rotate-step"
        } absolute right-[500px] bottom-[410px] overflow-hidden`}
      />
      <Image
        src={Gear5SVG}
        alt="gear5.svg"
        height="150px"
        width="150px"
        className={` ${
          props.toggleTimer ? "" : "animate-rotate-step-cc"
        } absolute right-[760px] bottom-[410px] overflow-hidden`}
      />
    </>
  );
}

export default Gear;
