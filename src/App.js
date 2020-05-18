import React, { useState, useRef } from "react";
import "./App.css";

function padTime(time) {
  return time.toString().padStart(2, "0");
}
export default function App() {
  const [title, setTitle] = useState("Let the Countdown begin");
  const [timeLeft, SetTimeLeft] = useState(10);
  const [show, setShow] = useState(false);

  const intervelRef = useRef(null);
  function startTimer() {
    if (intervelRef.current != null) return;
    setTitle("Way to go!");
    setShow(true);
    intervelRef.current = setInterval(() => {
      SetTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        //TODO reset the timer
        resetTimer();
        return 0;
      });
    }, 1000);
  }
  function stopTimer() {
    if (intervelRef.current === null) return;
    setTitle("You Can Do This!");

    console.log(intervelRef.current);
    clearInterval(intervelRef.current);
    intervelRef.current=null;
    setShow(false);
  }
  function resetTimer() {
    setTitle("Wanna Challenge Again?");
    clearInterval(intervelRef.current);
    SetTimeLeft(25 * 60);
    setShow(false);
  }
  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(Math.floor(timeLeft - minutes * 60));

  return (
    <div className="app">
      <h2>{title}</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        {!show && <button onClick={startTimer}>Start</button>}
        {show && <button onClick={stopTimer}>Stop</button>}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
