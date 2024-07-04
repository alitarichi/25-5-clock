import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DisplayState } from "./helpers";
import Timesetter from "./Timesetter";

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
        <Display />
        <audio id="beep" src={AlarmSound}></audio>
      </div>
    </>
  );
}

export default App;
