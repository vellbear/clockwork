import { React, useEffect, useState } from "react";
import PlaySVG from "../assets/play.svg";
import PauseSVG from "../assets/pause.svg";
import ResetSVG from "../assets/reset.svg";

function Timer(props) {
  const [currentInterval, setCurrentInterval] = useState(null);
  const [showTimerToggle, setShowTimerToggle] = useState(true);
  //Add timer that counts down by the second
  useEffect(() => {
    toggleTimer();
  }, [props.toggleTimer]);

  function toggleTimer() {
    if (!props.toggleTimer) {
      setCurrentInterval(
        setInterval(() => {
          props.setSeconds((time) => (time > 0 ? time - 1 : time));
        }, 1000)
      );
    }
    if (props.toggleTimer) clearInterval(currentInterval);
  }

  function resetTimer() {
    props.setSeconds(props.initialSeconds);
    props.setToggleTimer(true);
  }

  //Convert seconds to hours minutes and seconds
  function ConvertSeconds() {
    const hrs = Math.floor(props.seconds / 3600);
    const mins = Math.floor(props.seconds / 60 - hrs * 60);
    const secs = props.seconds - hrs * 3600 - mins * 60;
    return formatTimer(hrs, mins, secs);
  }

  //Format timer
  function formatTimer(hrs, mins, secs) {
    let formattedHours, formattedMinutes, formattedSeconds;

    //format hours
    if (hrs === 0) {
      formattedHours = "";
    } else formattedHours = hrs + ":";

    //format minutes
    if (mins === 0 && hrs <= 0) {
      formattedMinutes = "";
    } else if (mins < 10 && hrs !== 0) {
      formattedMinutes = "0" + mins.toString() + ":";
    } else if (mins < 10) {
      formattedMinutes = mins + ":";
    } else formattedMinutes = mins + ":";

    //format seconds
    if (secs === 0) {
      formattedSeconds = "00";
    } else if (secs < 10 && mins !== 0) {
      formattedSeconds = "0" + secs.toString();
    } else if (secs < 10) {
      formattedSeconds = secs;
    } else formattedSeconds = secs;

    //format timer at 0 secs
    if (hrs === 0 && mins === 0 && secs === 0) {
      formattedHours = "";
      formattedMinutes = "";
      formattedSeconds = "0";
    }

    return formattedHours + formattedMinutes + formattedSeconds;
  }

  function toggleDisplay() {
    if (props.togglePercentage) return ConvertSeconds();
    return props.percentage + "%";
  }

  return (
    <div
      className={`${
        props.showDisplay ? "grid" : "hidden"
      } relative grid-flow-col items-center h-32 w-72 rounded-full bg-slate-800 drop-shadow-lg border-4 border-white text-3xl font-semibold z-50`}
      onMouseEnter={() => setShowTimerToggle(!showTimerToggle)}
    >
      {/*Reset Button*/}
      <img
        src={ResetSVG}
        alt="Play Button"
        className="grid place-self-center cursor-pointer"
        onClick={() => resetTimer()}
      />
      {/*Display timer*/}
      <div className="grid place-content-center w-full h-full text-white">
        {props.showDisplay ? toggleDisplay() : ""}
      </div>
      {/*Play/Pause Button*/}
      <img
        src={props.toggleTimer ? PlaySVG : PauseSVG}
        alt="Play Button"
        className="grid place-self-center cursor-pointer"
        onClick={() => {
          props.setToggleTimer(!props.toggleTimer);
        }}
      />

      {/*Start/Stop Timer*/}
      {/*NOTE: Doesn't work on mobile */}
      {/*<div
        className={`${showTimerToggle ? "hidden" : "grid"} ${
          props.toggleTimer ? "text-green-400" : "text-red-500"
        } absolute cursor-pointer place-content-center w-full h-full rounded-full text-3xl bg-slate-800  p-4 font-semibold`}
        onClick={() => {
          props.setToggleTimer(!props.toggleTimer);
          //setShowTimerToggle(true);
        }}
        onMouseLeave={() => {
          setShowTimerToggle(!showTimerToggle);
        }}
      >
        {props.toggleTimer ? "Start" : "Stop"}
      </div>*/}
    </div>
  );
}

export default Timer;
