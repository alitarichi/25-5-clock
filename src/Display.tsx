import { FaPause, FaPlay, FaUndo } from "react-icons/fa";
import { DisplayState, formatTime } from "./helpers";

interface DisplayProps {
  displayState: DisplayState;
  reset: () => void;
  startStop: (displayState: DisplayState) => void;
}

const Display: React.FC<DisplayProps> = ({
  displayState,
  reset,
  startStop,
}) => {
  return (
    <div className="display">
      <h4 id="timer-label">{displayState.timeType}</h4>
      <span
        id="time-left"
        style={{ color: `${displayState.timerRunning ? "red" : "white"}` }}
      >
        {formatTime(displayState.time)}
      </span>
      <button id="start_stop" onClick={() => startStop(displayState)}>
        {displayState.timerRunning ? <FaPause /> : <FaPlay />}
      </button>
      <button id="reset" onClick={reset}>
        <FaUndo />
      </button>
    </div>
  );
};

export default Display;
