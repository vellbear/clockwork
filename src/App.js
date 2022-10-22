import { useState } from "react";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [seconds, setSeconds] = useState(1500);
  const [showTimer, setShowTimer] = useState(true);
  const [toggleTimer, setToggleTimer] = useState(true);
  return (
    <div className="App h-screen">
      <ProgressBar seconds={seconds} />
      <Timer
        seconds={seconds}
        showTimer={showTimer}
        toggleTimer={toggleTimer}
        setSeconds={setSeconds}
        setShowTimer={setShowTimer}
      />
      {/*Show/Hide Timer*/}
      <button
        className=" border-solid border-black bg-yellow-400 border-4 p-2 font-semibold"
        onClick={() => setShowTimer(!showTimer)}
      >
        {showTimer ? "Hide" : "Show"}
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
