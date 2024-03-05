import React, { useState } from "react";

const RepetitionExercise = ({ name, setMenuScreen }) => {
  const [repetitions, setRepetitions] = useState(0);

  const handleIncrement = () => {
    setRepetitions(repetitions + 1);
  };

  const handleReset = () => {
    setRepetitions(0);
  };

  return (
    <div>
      <p>Reps: {repetitions}</p>
      <button onClick={handleIncrement}>Complete Rep</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  );
};

export default RepetitionExercise;
