import { useState } from "react";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import Settings from "./components/Settings";

function App() {
  const [initialSeconds, setInintialSeconds] = useState(1500);
  const [seconds, setSeconds] = useState(1500);
  const [percentage, setPercentage] = useState(0);
  const [showDisplay, setShowDisplay] = useState(true);
  const [toggleTimer, setToggleTimer] = useState(true);
  const [togglePercentage, setTogglePercentage] = useState(true);
  return (
    <div className="App h-screen grid place-content-center overflow-hidden">
      <ProgressBar
        seconds={seconds}
        initialSeconds={initialSeconds}
        toggleTimer={toggleTimer}
        setPercentage={setPercentage}
      />
      <Settings
        showDisplay={showDisplay}
        togglePercentage={togglePercentage}
        setShowDisplay={setShowDisplay}
        setTogglePercentage={setTogglePercentage}
        setInintialSeconds={setInintialSeconds}
      />
      <Timer
        seconds={seconds}
        initialSeconds={initialSeconds}
        percentage={percentage}
        showDisplay={showDisplay}
        toggleTimer={toggleTimer}
        togglePercentage={togglePercentage}
        setSeconds={setSeconds}
        setShowDisplay={setShowDisplay}
        setToggleTimer={setToggleTimer}
      />
    </div>
  );
}

export default App;
