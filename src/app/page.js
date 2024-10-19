"use client";
import { useEffect, useState } from "react";

const Time = () => {
  const [timer, setTimer] = useState(20);

  const timeIsRun = () => {
    // setTimer((prev) => prev - 1);
    setTimer((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const sec = timer % 60;
  const minute = Math.floor(timer / 60);

  const runTime = (times) => {
    if (times <= 9) return `0${timer}`;
    // if (times < 1) return "0";
    return times;
  };

  const addtime = () => {
    setTimer(timer + 5);
  };
  const minTime = () => {
    setTimer(timer - 5);
  };

  useEffect(() => {
    const interval = setInterval(timeIsRun, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      <div className="second">Time : {runTime(sec)} seconds</div>
      <div className="timeButton">
        <button className="button" onClick={() => addtime()}>
          5 sec +
        </button>
        <button className="button" onClick={() => minTime()}>
          - 5 sec
        </button>
      </div>
    </div>
  );
};
export default Time;
