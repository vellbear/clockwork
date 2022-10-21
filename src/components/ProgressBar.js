import { React } from "react";

function ProgressBar(props) {
  function calcPercentage() {
    const percentage = Math.floor(100 - (props.seconds / 1500) * 100);
    if (percentage === 0) return 1;
    return percentage;
  }
  function nearestFraction() {
    //tailwind percantages in fractions: 1/6, 2/6, 3/6, 4/6, 5/6, full(6/6)
    if (calcPercentage() === 100) return "full";
    else if (calcPercentage() >= 83.3) return "5/6";
    else if (calcPercentage() >= 66.6) return "4/6";
    else if (calcPercentage() >= 50) return "3/6";
    else if (calcPercentage() >= 33.3) return "2/6";
    else return "1/6";
  }
  return (
    <div
      className={`absolute z-[-100] grid place-items-end h-full w-full bg-sky-500`}
    >
      {/*Display Progress Bar*/}
      <div
        className={`h-${nearestFraction()} z-[-50] w-full bg-red-500 transition-all transform ease-in-out duration-1000`}
      ></div>
      {console.log(nearestFraction(), calcPercentage())}
    </div>
  );
}

export default ProgressBar;
