import { React } from "react";

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
      className={`absolute z-[-100] grid place-items-end h-full w-full bg-slate-800`}
    >
      {/*Display Progress Bar*/}
      <div
        className={` z-[-50] w-full bg-blue-500 transition-all transform ease-in-out duration-1000`}
        style={{ height: calcPercentage() + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
