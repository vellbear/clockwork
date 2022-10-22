import { useState } from "react";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [seconds, setSeconds] = useState(1500);
  const [percentage, setPercentage] = useState(0);
  const [showDisplay, setShowDisplay] = useState(true);
  const [toggleTimer, setToggleTimer] = useState(true);
  const [togglePercentage, setTogglePercentage] = useState(true);
  return (
    <div className="App h-screen">
      <ProgressBar
        seconds={seconds}
        toggleTimer={toggleTimer}
        setPercentage={setPercentage}
      />
      <Timer
        seconds={seconds}
        percentage={percentage}
        showDisplay={showDisplay}
        toggleTimer={toggleTimer}
        togglePercentage={togglePercentage}
        setSeconds={setSeconds}
        setShowDisplay={setShowDisplay}
      />
      {/*Show/Hide Display*/}
      <button
        className=" border-solid border-black bg-yellow-400 border-4 p-2 font-semibold"
        onClick={() => setShowDisplay(!showDisplay)}
      >
        {showDisplay ? "Hide Display" : "Show Display"}
      </button>
      {/*Show/Hide Percentage*/}
      <button
        className=" border-solid border-black bg-yellow-400 border-4 p-2 font-semibold"
        onClick={() => setTogglePercentage(!togglePercentage)}
      >
        {togglePercentage ? "Show as percentage" : "Show as timer"}
      </button>
      {/*Start/Stop Timer*/}
      <button
        className=" border-solid border-black bg-yellow-400 border-4 p-2 font-semibold"
        onClick={() => setToggleTimer(!toggleTimer)}
      >
        {toggleTimer ? "Start" : "Stop"}
      </button>
    </div>
  );
}

export default App;
