import { React } from "react";

function ProgressBar(props) {
  function calcPercentage() {
    const percentage = Math.floor(100 - (props.seconds / 1500) * 100);
    if (percentage === 0) return 1;
    return percentage;
  }
  function nearestFraction() {
    //tailwind percantages in fractions: 1/6, 2/6, 3/6, 4/6, 5/6, full(6/6)
    switch (true) {
      case calcPercentage() >= 100:
        return "h-full";
      case calcPercentage() >= 83.3:
        return "h-5/6";
      case calcPercentage() >= 66.6:
        return "h-4/6";
      case calcPercentage() >= 50:
        return "h-3/6";
      case calcPercentage() >= 33.3:
        return "h-2/6";
      default:
        return "h-1/6";
    }
  }
  return (
    <div
      className={`absolute z-[-100] grid place-items-end h-full w-full bg-sky-500`}
    >
      {/*Display Progress Bar*/}
      <div
        className={`${
          nearestFraction()
            ? nearestFraction()
            : "h-1/6" || "h-2/6" || "h-3/6" || "h-4/6" || "h-5/6" || "h-full" //preloads tailwind heights (necessary)
        } z-[-50] w-full bg-red-500 transition-all transform ease-in-out duration-1000`}
      ></div>
    </div>
  );
}

export default ProgressBar;
