import { React, useState } from "react";
import ExitSVG from "../assets/exit.svg";
import SettingsSVG from "../assets/settings.svg";

function Settings(props) {
  const [toggleSettings, setToggleSettings] = useState(true);

  return (
    <div className="absolute right-0 mr-4 mt-4">
      {toggleSettings ? (
        <img
          src={SettingsSVG}
          alt="settings.svg"
          className="cursor-pointer p-4"
          onClick={() => setToggleSettings(!toggleSettings)}
        />
      ) : (
        <div className="grid gap-2 p-4 pb-8 pl-8 border-2 bg-slate-800 border-lime-400 text-white text-sm font-medium">
          {/*Show/Hide Display*/}
          <img
            src={ExitSVG}
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
              checked={!props.showDisplay}
              id="display-toggle"
              className="sr-only peer"
              onChange={() => props.setShowDisplay(!props.showDisplay)}
            />
            <div className="w-11 h-6 bg-slate-500 rounded-full peer peer-checked:bg-lime-400 peer-checked:after:translate-x-full peer-checked:after:bg-slate-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3">Hide display</span>
          </label>

          {/*Show/Hide Percentage*/}
          <label
            htmlFor="percentage-toggle"
            className="inline-flex relative items-center cursor-pointer"
          >
            <input
              type="checkbox"
              checked={!props.togglePercentage}
              id="percentage-toggle"
              className="sr-only peer"
              onChange={() =>
                props.setTogglePercentage(!props.togglePercentage)
              }
            />
            <div className="w-11 h-6 bg-slate-500 rounded-full peer peer-checked:bg-lime-400 peer-checked:after:translate-x-full peer-checked:after:bg-slate-800 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            <span className="ml-3">Show as percentage</span>
          </label>
          <label for="initial-time">
            <input
              id="initial-time"
              type="number"
              pattern="[0-99{2}]"
              maxLength="2"
              min="0"
              max="99"
              className="bg-transparent border-b-white border-b-2 outline-none w-6 text-lg text-center"
              style={{ webkitAppearance: "textfield" }}
              onKeyDownCapture={(e) => {
                if (e.key === "-" || e.key === ".") {
                  e.preventDefault();
                  return;
                }
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
                    e.key === "9")
                )
                  e.target.value = e.target.value.slice(0, -1);
              }}
              onBlur={(e) => {
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
            />
            <span className="text-lg">:</span>
            <input
              id="initial-time"
              type="number"
              pattern="[0-99{2}]"
              maxLength="2"
              min="0"
              max="99"
              className="bg-transparent border-b-white border-b-2 outline-none w-6 text-lg text-center"
              style={{ webkitAppearance: "textfield" }}
              onKeyDownCapture={(e) => {
                if (e.key === "-" || e.key === ".") {
                  e.preventDefault();
                  return;
                }
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
                    e.key === "9")
                )
                  e.target.value = e.target.value.slice(0, -1);
              }}
            />
            <span className="text-lg">:</span>
            <input
              id="initial-time"
              type="number"
              pattern="[0-99{2}]"
              maxLength="2"
              min="0"
              max="99"
              className="bg-transparent border-b-white border-b-2 outline-none w-6 text-lg text-center"
              style={{ webkitAppearance: "textfield" }}
              onKeyDownCapture={(e) => {
                if (e.key === "-" || e.key === ".") {
                  e.preventDefault();
                  return;
                }
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
                    e.key === "9")
                )
                  e.target.value = e.target.value.slice(0, -1);
              }}
              onKeyUp={(e) => {
                if (e.target.value > 59) {
                  console.log("greater than 59");
                  e.target.value = 59;
                }
              }}
            />
            <span className="ml-3">Set time</span>
          </label>
        </div>
      )}
    </div>
  );
}

export default Settings;
