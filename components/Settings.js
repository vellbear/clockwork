import { useState, useEffect, useRef, forwardRef } from "react";
import Image from "next/image";
import ExitSVG from "../assets/exit.svg";
import SettingsSVG from "../assets/settings.svg";

function Settings(props) {
  const [toggleSettings, setToggleSettings] = useState(true);
  const hoursInputRef = useRef(null);
  const minutesInputRef = useRef(null);
  const secondsInputRef = useRef(null);

  useEffect(() => {
    props.setSeconds(props.initialSeconds);
  }, [props.initialSeconds]);

  function convertedInitialSeconds(type) {
    const hours = Math.floor(props.initialSeconds / 3600);
    const minutes = Math.floor(props.initialSeconds / 60 - hours * 60);
    const seconds = props.initialSeconds - hours * 3600 - minutes * 60;

    if (type === "getHours") return formatTime(hours);
    if (type === "getMinutes") return formatTime(minutes);
    if (type === "getSeconds") return formatTime(seconds);
    return;
  }
  function formatTime(value) {
    if (value < 10) return "0" + value;
    return value;
  }

  //Forward Ref required to use useRef for a functional component
  const TimerInput = forwardRef((props, ref) => {
    const max = props.maxValue ? props.maxValue : 99;
    const [value, setValue] = useState("00");
    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    return (
      <input
        ref={ref}
        value={value}
        type="number"
        pattern="[0-99{2}]"
        maxLength="2"
        min="0"
        max="99"
        className="bg-transparent border-b-white border-b-2 outline-none w-6 text-lg text-center"
        style={{ WebkitAppearance: "textfield" }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDownCapture={(e) => {
          if (e.key === "-" || e.key === ".") {
            e.preventDefault();
            return;
          }
          if (window.getSelection().length >= 1) return;
          if (
            e.target.value.length > 1 &&
            (e.key === "0" ||
              e.key === "1" ||
              e.key === "2" ||
              e.key === "3" ||
              e.key === "4" ||
              e.key === "5" ||
              e.key === "6" ||
              e.key === "7" ||
              e.key === "8" ||
              e.key === "9") &&
            window.getSelection().toString() === ""
          )
            e.target.value = e.target.value.slice(0, -1);
        }}
        onBlur={(e) => {
          props.setInitialSeconds(
            hoursInputRef.current.value * 3600 +
              minutesInputRef.current.value * 60 +
              secondsInputRef.current.value * 1
          );
          if (
            e.target.value.length === 1 &&
            (e.target.value === "0" ||
              e.target.value === "1" ||
              e.target.value === "2" ||
              e.target.value === "3" ||
              e.target.value === "4" ||
              e.target.value === "5" ||
              e.target.value === "6" ||
              e.target.value === "7" ||
              e.target.value === "8" ||
              e.target.value === "9")
          )
            e.target.value = 0 + e.target.value;
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.setInitialSeconds(
              hoursInputRef.current.value * 3600 +
                minutesInputRef.current.value * 60 +
                secondsInputRef.current.value * 1
            );
          }
          if (e.target.value > max) {
            e.target.value = max;
          }
        }}
      />
    );
  });

  return (
    <div
      title="Click to open the settings menu"
      className="absolute right-0 mr-4 mt-4"
    >
      {toggleSettings ? (
        <Image
          src={SettingsSVG}
          alt="settings.svg"
          className="cursor-pointer p-4"
          onClick={() => setToggleSettings(!toggleSettings)}
        />
      ) : (
        <div className="grid gap-2 p-4 max-w-xs border-2 bg-slate-800 border-white drop-shadow-lg text-white text-sm font-medium">
          {/*Show/Hide Display*/}
          <Image
            src={ExitSVG}
            title="Click to close the settings menu"
            alt="exit.svg"
            className="place-self-end cursor-pointer"
            onClick={() => setToggleSettings(!toggleSettings)}
          />
          <label
            htmlFor="display-toggle"
            className="inline-flex relative items-center cursor-pointer mr-24"
          >
            <input
              type="checkbox"
              title="Toggle to show/hide the timer display"
              checked={!props.showDisplay}
              id="display-toggle"
              className="sr-only peer"
              onChange={() => props.setShowDisplay(!props.showDisplay)}
            />
            <div className="w-11 h-6 bg-slate-500 rounded-full peer peer-checked:bg-[#339989] peer-checked:after:translate-x-full peer-checked:after:bg-slate-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3">Hide display</span>
          </label>

          {/*Show/Hide Percentage*/}
          <label
            htmlFor="percentage-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              title="Toggle to display as a percentage or as a timer"
              checked={!props.togglePercentage}
              id="percentage-toggle"
              className="sr-only peer"
              onChange={() =>
                props.setTogglePercentage(!props.togglePercentage)
              }
            />
            <div className="w-11 h-6 bg-slate-500 rounded-full peer peer-checked:bg-[#339989] peer-checked:after:translate-x-full peer-checked:after:bg-slate-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3">Show as percentage</span>
          </label>
          <div title="Type to set a custom time" className="grid">
            <label>
              {/*Hours*/}
              <TimerInput
                ref={hoursInputRef}
                setInitialSeconds={props.setInitialSeconds}
                value={convertedInitialSeconds("getHours")}
              />
              <span className="text-lg">:</span>
              {/*Minutes*/}
              <TimerInput
                ref={minutesInputRef}
                setInitialSeconds={props.setInitialSeconds}
                value={convertedInitialSeconds("getMinutes")}
              />
              <span className="text-lg">:</span>
              {/*Seconds*/}
              <TimerInput
                ref={secondsInputRef}
                setInitialSeconds={props.setInitialSeconds}
                value={convertedInitialSeconds("getSeconds")}
                maxValue={59}
              />
              <span className="ml-3">Set time</span>
            </label>
            {props.toggleTimer ? (
              <></>
            ) : (
              <p
                title="WARNING: Cannot set a custom time while timer is active."
                className="p-2 mt-2 bg-yellow-100 border-2 border-yellow-500 text-yellow-700"
              >
                WARNING: Cannot set a custom time while timer is active.
              </p>
            )}
            <button
              title="Click to save and close settings"
              className="border-2 p-2 mt-2"
              onClick={() => {
                setToggleSettings(!toggleSettings);
                props.setInitialSeconds(
                  hoursInputRef.current.value * 3600 +
                    minutesInputRef.current.value * 60 +
                    secondsInputRef.current.value * 1
                );
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
