import React, { useState } from "react";
import TimerButton from "../timerButton/timerButton";
import "./timer.css";

let interval: any;
const Timer = () => {
  let [milisec, setMilisec] = useState<number>(0);
  let [sec, setSec] = useState<number>(0);
  let [min, setMin] = useState<number>(0);
  let [disable, setDisable] = useState<boolean>(false);
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
    setDisable(true)
  };

  const stopTimer = () => {
    clearInterval(interval);
    setDisable(false)
  };

  const resetTimer = () => {
    setSec(0);
    setMin(0);
    setMilisec(0);
    setDisable(false)
    clearInterval(interval);
  };

  return (
    <div className="timer-container">
      <div className="timer">
        <h1>{min}</h1>
        <h1>{sec}</h1>
        <h1>{milisec}</h1>
      </div>
      <div style={{display:'flex'}}>
        <TimerButton buttonAction={startTimer} buttonValue={"Start"} disable={disable} />
        <TimerButton buttonAction={stopTimer} buttonValue={"Stop"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"Reset"} />
      </div>
    </div>
  );
};

export default Timer;
