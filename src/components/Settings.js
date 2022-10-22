import React from "react";

function Settings(props) {
  return (
    <div className="absolute right-0 grid gap-2 p-2 bg-slate-100">
      {/*Show/Hide Display*/}
      <label
        for="display-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="display-toggle"
          class="sr-only peer"
          onChange={() => props.setShowDisplay(!props.showDisplay)}
        />
        <div class="w-11 h-6 bg-slate-400 rounded-full peer peer-checked:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        <span class="ml-3 text-sm font-medium text-slate-900">
          Hide display
        </span>
      </label>

      {/*Show/Hide Percentage*/}
      <label
        for="percentage-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="percentage-toggle"
          class="sr-only peer"
          onChange={() => props.setTogglePercentage(!props.togglePercentage)}
        />
        <div class="w-11 h-6 bg-slate-400 rounded-full peer peer-checked:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        <span class="ml-3 text-sm font-medium text-slate-900">
          Show as percentage
        </span>
      </label>
    </div>
  );
}

export default Settings;
