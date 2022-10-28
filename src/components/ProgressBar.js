import { React } from "react";
import Gear from "./Gear";

function ProgressBar(props) {
  function calcPercentage() {
    const percentage = 100 - (props.seconds / props.initialSeconds) * 100;
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
      <Gear />
      {/*Display Progress Bar*/}
      <div
        className={` z-[-50] w-full bg-[#339989] transition-all transform ease-in-out duration-1000`}
        style={{ height: calcPercentage() + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
