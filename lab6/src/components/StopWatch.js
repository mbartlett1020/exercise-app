import React, { useState, useEffect } from "react";

const StopWatch = ({ duration, isRunning, setDuration }) => {
  const [milliseconds, setMilliseconds] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning && duration > 0) {
      setMilliseconds(duration * 1000); // Convert seconds to milliseconds
    }
  }, [isRunning, duration]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleReset = () => {
    setMilliseconds(0);
    setDuration(0); // Reset duration in seconds
  };

  return (
    <div>
      <p>Duration: {formatTime(milliseconds / 1000)}</p>{" "}
      {/* Convert milliseconds to seconds */}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default StopWatch;
