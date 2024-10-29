"use client";
import { useEffect, useState } from "react";

const Time = () => {
  const [timer, setTimer] = useState(0);

  const timeIsRun = () => {
    setTimer((prev) => prev + 1);
    // setTimer((prev) => (prev > 0 ? prev + 1 : 0));
  };

  const sec = timer % 60;
  const minute = Math.floor(timer / 60);

  const runTime = (times) => {
    if (times <= 9) return `0${timer}`;
    return times;
  };

  const addtime = () => {
    setTimer(timer + 5);
  };
  const minTime = () => {
    setTimer(timer - 5);
    setTimer((prev) => (prev > 0 ? prev + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(timeIsRun, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time">
      <div className="second">
        {minute} minute : {sec} seconds
      </div>
      <div className="timeButton">
        <button className="button" onClick={() => addtime()}>
          5sec +
        </button>
        <button className="button" onClick={() => minTime()}>
          - 5sec
        </button>
      </div>
    </div>
  );
};
export default Time;
