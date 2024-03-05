import React, { useState } from "react";
import StopWatch from "./StopWatch.js";

const DurationExercise = ({ name, setMenuScreen }) => {
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setDuration(0);
  };

  return (
    <div>
      <StopWatch duration={duration} isRunning={isRunning} />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Pause</button>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  );
};

export default DurationExercise;
