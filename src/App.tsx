import { useState } from "react";
import "./App.css";
import { DisplayState } from "./helpers";
import Timesetter from "./Timesetter";
import Display from "./Display";

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
    timeRunning: false,
  });

  const reset = () => {
    console.log("reset");
  };

  const startStop = (currentDisplayState: DisplayState) => {
    console.log("startStop");
  };

  return (
    <>
      <div className="clock">
        <div className="setters">
          <div className="session">
            <h4 id="session-label"> Seesion Lenght</h4>
            <Timesetter
              time={sessionTime}
              setTime={setSessionTime}
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
              setTime={setBreakTime}
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
        <audio id="beep" src={AlarmSound}></audio>
      </div>
    </>
  );
}

export default App;
