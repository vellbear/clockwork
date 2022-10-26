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
        </div>
      )}
    </div>
  );
}

export default Settings;
