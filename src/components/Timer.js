import { React, useState, useEffect } from "react";

function Timer() {
  //useState to keep track of second value
  const [seconds, setSeconds] = useState(5100);

  //Add timer that counts down by the second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((time) => time - 1);
    }, 1000);
    console.log((3600 % 3600) + 1);
    return () => {
      clearInterval(interval);
    };
  }, []);
  //Convert seconds to hours minutes and seconds
  function ConvertSeconds() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor(seconds / 60 - hrs * 60);
    const secs = seconds - hrs * 3600 - mins * 60;
    let formattedHours, formattedMinutes, formattedSeconds;

    //format hours
    if (hrs === 0) {
      formattedHours = "";
    } else formattedHours = hrs + ":";

    //format minutes
    if (mins === 0) {
      formattedMinutes = "00:";
    } else if (mins < 10) {
      formattedMinutes = "0" + mins.toString() + ":";
    } else formattedMinutes = mins + ":";

    //format seconds
    if (secs === 0) {
      formattedSeconds = "00";
    } else if (secs < 10) {
      formattedSeconds = "0" + secs.toString();
    } else formattedSeconds = secs;

    return formattedHours + formattedMinutes + formattedSeconds;
  }

  return (
    <div>
      {/*Display timer*/}
      {ConvertSeconds()}
    </div>
  );
}

export default Timer;
