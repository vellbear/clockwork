import { React } from "react";
import GearSVG from "../assets/gear.svg";

function ProgressBar(props) {
  function calcPercentage() {
    const percentage = 100 - (props.seconds / 1500) * 100;
    const roundedPercentage = Math.floor(percentage);
    if (percentage > 0 && percentage <= 1) {
      props.setPercentage(1);
      return 1;
    }
    props.setPercentage(roundedPercentage);
    return roundedPercentage;
  }

  return (
    <div
      className={`absolute z-[-100] grid place-items-end h-full w-full bg-slate-800 overflow-hidden`}
    >
      {/*TODO: Change gear SVG and move to own Component*/}
      <img
        src={GearSVG}
        alt="gear.svg"
        height="100px"
        width="100px"
        className="absolute animate-rotate-step right-[80px] bottom-[50px] overflow-hidden h-[100px] w-[100px]"
      />
      <img
        src={GearSVG}
        alt="gear.svg"
        height="500px"
        width="500px"
        className="absolute animate-rotate-step right-[100px] bottom-[80px] overflow-hidden"
      />
      <img
        src={GearSVG}
        alt="gear.svg"
        height="350px"
        width="350px"
        className="absolute animate-rotate-step right-[600px] bottom-[20px] overflow-hidden"
      />
      <img
        src={GearSVG}
        alt="gear.svg"
        height="220px"
        width="220px"
        className="absolute animate-rotate-step right-[620px] bottom-[420px] overflow-hidden"
      />
      {/*Display Progress Bar*/}
      <div
        className={` z-[-50] w-full bg-lime-400 transition-all transform ease-in-out duration-1000`}
        style={{ height: calcPercentage() + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
