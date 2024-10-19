import { useState, useEffect } from "react";

export default function Progressbar({ timeout, onTimeout, mode }) {
  const [timerRemaining, setTimerRemaining] = useState(timeout);

  useEffect(() => {
    console.log("timer is set");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log("interval  is set");
    const interval = setInterval(() => {
      setTimerRemaining((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={timerRemaining}
      max={timeout}
      className={mode}
    />
  );
}
