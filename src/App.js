import { useState } from "react";
import Timer from "./components/Timer";
import ProgressBar from "./components/ProgressBar";
import Settings from "./components/Settings";

function App() {
  const [initialSeconds, setInitialSeconds] = useState(1500);
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
        initialSeconds={initialSeconds}
        setShowDisplay={setShowDisplay}
        setTogglePercentage={setTogglePercentage}
        setInitialSeconds={setInitialSeconds}
        setSeconds={setSeconds}
      />
      <div className="grid w-full">
        <h1 className="text-white text-5xl text-center font-mono font-bold tracking-widest pb-16">
          ClOcKwOrK
        </h1>
      </div>
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
