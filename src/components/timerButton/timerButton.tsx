import React from "react";
import "./button.css";

const TimerButton = ({ buttonAction, buttonValue ,disable}: any) => (
  <div>
    <button className='buton' disabled={disable} onClick={() => buttonAction()}>{buttonValue}</button>
  </div>
);
export default TimerButton;
