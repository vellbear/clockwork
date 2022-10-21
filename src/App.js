import { useState } from "react";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [seconds, setSeconds] = useState(1050);
  const [showTimer, setShowTimer] = useState(true);
  return (
    <div className="App h-screen">
      <ProgressBar seconds={seconds} />
      <Timer
        seconds={seconds}
        showTimer={showTimer}
        setSeconds={setSeconds}
        setShowTimer={setShowTimer}
      />
      {/*Temporary Toggle Timer*/}
      <button
        className=" border-solid border-black bg-yellow-400 border-4 p-2 font-semibold"
        onClick={() => setShowTimer(!showTimer)}
      >
        TOGGLE TIMER
      </button>
    </div>
  );
}

export default App;
