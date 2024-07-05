import { useState } from "react";
import "./App.css";
import { DisplayState } from "./helpers";
import Timesetter from "./Timesetter";
import Display from "./Display";
import AlarmSound from "./AlarmSound.mp3";

const defaultBreakTime = 5 * 60;
const defaultSessionTime = 25 * 60;
const min = 60;
const max = 60 * 60;
const interval = 60;

function App() {
  const [breakTime, setBreakTime] = useState(defaultBreakTime);
  const [sessionTime, setSessionTime] = useState(defaultSessionTime);
  const [displayState, setDisplayState] = useState<DisplayState>({
    time: sessionTime,
    timeType: "Session",
    timerRunning: false,
  });

  const reset = () => {
    console.log("reset");
  };

  const startStop = (displayState: DisplayState) => {
    setDisplayState((prev) => ({
      ...prev,
      timerRunning: !prev.timerRunning,
    }));
  };

  const changeBreakTime = (time: number) => {
    if (displayState.timerRunning) return;
    setBreakTime(time);
  };

  const changeSessionTime = (time: number) => {
    if (displayState.timerRunning) return;
    setSessionTime(time);
    setDisplayState({
      time: time,
      timeType: "Session",
      timerRunning: false,
    });
  };

  return (
    <>
      <div className="clock">
        <div className="setters">
          <div className="session">
            <h4 id="session-label"> Seesion Lenght</h4>
            <Timesetter
              time={sessionTime}
              setTime={changeSessionTime}
              min={min}
              max={max}
              interval={interval}
              type="Session"
            />
          </div>
          <div className="break">
            <div className="break"></div>
            <h4 id="break-label">Break Lenght</h4>
            <Timesetter
              time={breakTime}
              setTime={changeBreakTime}
              min={min}
              max={max}
              interval={interval}
              type="Break"
            />
          </div>
        </div>
        <Display
          displayState={displayState}
          reset={reset}
          startStop={startStop}
        />
        <audio id="beep" src="./AlarmSound"></audio>
      </div>
    </>
  );
}

export default App;
