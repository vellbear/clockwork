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
    <div className="App h-screen w-screen relative grid place-content-center overflow-hidden">
      {/*Title*/}
      <div className="absolute w-full">
        <h1 className="absolute text-slate-800 text-2xl text-center w-fit font-mono font-bold tracking-widest left-8 top-8">
          ClOcKwOrK
        </h1>
      </div>
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
      <div className="w-[calc(100vw-4rem)] max-w-[30rem]">
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
    </div>
  );
}

export default App;
