import React, { useState } from "react";
import TimerButton from "../timerButton/timerButton";
import "./timer.css";

let interval: any;
const Timer = () => {
  let [milisec, setMilisec] = useState<number>(0);
  let [sec, setSec] = useState<number>(0);
  let [min, setMin] = useState<number>(0);
  const timer = () => {
    milisec += 1;
    setMilisec(milisec);
    if (milisec > 99) {
      milisec = 0;
      sec += 1;
      setSec(sec);
    } else if (sec > 59) {
      sec = 0;
      min += 1;
      setMin(min);
    }
  };
  const startTimer = () => {
    interval = setInterval(timer, 10);
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  const resetTimer = () => {
    setSec(0);
    setMin(0);
    setMilisec(0);
    clearInterval(interval);
  };

  return (
    <div className="timer-container">
      <div className="time-display">
        <h1>{min}</h1>
        <h1>{sec}</h1>
        <h1>{milisec}</h1>
      </div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={"Start"} />
        <TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
      </div>{" "}
    </div>
  );
};

export default Timer;
