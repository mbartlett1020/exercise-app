import React, { useState } from "react";
import StopWatch from "./StopWatch.js";

const RunningExercise = ({ setMenuScreen }) => {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleLapClick = () => {
    setLapTimes((prevLapTimes) => [...prevLapTimes, duration / 1000]); // Convert milliseconds to seconds
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <StopWatch
        duration={duration / 1000} // Convert milliseconds to seconds
        isRunning={isRunning}
        setDuration={setDuration}
      />
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleLapClick}>Lap</button>
      <button onClick={setMenuScreen}>Back to Menu</button>

      <div>
        <h3>Lap Times:</h3>
        <ul>
          {lapTimes.map((lapTime, index) => (
            <li key={index}>
              Lap {index + 1}: {formatTime(lapTime)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RunningExercise;
