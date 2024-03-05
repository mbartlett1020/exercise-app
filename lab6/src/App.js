import "./App.css";
import { useCallback, useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import RunningExercise from "./components/RunningExercise"; // Added new component

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetition";
const RUNNING_EXERCISE = "running"; // Added new exercise type

function App() {
  const [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
  const [currentExercise, setCurrentExercise] = useState({});
  let screenComponent = undefined;

  const buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise);
    setCurrentScreen(EXERCISE_SCREEN);
  }, []);

  const setMenuScreen = useCallback(() => {
    setCurrentExercise({});
    setCurrentScreen(MENU_SCREEN);
  }, []);

  if (currentScreen === MENU_SCREEN) {
    screenComponent = (
      <div>
        <h1>Go Do Something!</h1>
        <h3>Select an exercise:</h3>
        <ul>
          {exerciseList.map((exercise) => {
            return (
              <li key={exercise.name}>
                <button onClick={() => buttonClick(exercise)}>
                  {exercise.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch (currentExercise.type) {
      case DURATION_EXERCISE:
        screenComponent = (
          <DurationExercise
            name={currentExercise.name}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      case REPETITION_EXERCISE:
        screenComponent = (
          <RepetitionExercise
            name={currentExercise.name}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      case RUNNING_EXERCISE: // Added case for the new exercise type
        screenComponent = (
          <RunningExercise
            name={currentExercise.name}
            setMenuScreen={setMenuScreen}
          />
        );
        break;
      default:
        screenComponent = undefined;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        {screenComponent && (
          <div>
            <h1>{currentExercise.name}</h1>
            {screenComponent}
          </div>
        )}
      </header>
    </div>
  );
}

const exerciseList = [
  { type: DURATION_EXERCISE, name: "Running" },
  { type: DURATION_EXERCISE, name: "Rowing" },
  { type: DURATION_EXERCISE, name: "Swimming" },
  { type: REPETITION_EXERCISE, name: "Push Ups" },
  { type: RUNNING_EXERCISE, name: "Laps" },
];

export default App;
