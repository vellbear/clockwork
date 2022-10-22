import { React, useEffect, useState } from "react";

function Timer(props) {
  const [currentInterval, setCurrentInterval] = useState(null);
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
    <div className="text-3xl font-semibold z-50">
      {/*Display timer*/}
      {props.showDisplay ? toggleDisplay() : ""}
    </div>
  );
}

export default Timer;
