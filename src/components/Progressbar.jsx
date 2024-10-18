
import { useState, useEffect } from 'react';

export default function Progressbar({timeout, intervalStep, onTimeout}) {
    const [timerRemaining, setTimerRemaining] = useState(timeout);

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [onTimeout, timeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimerRemaining(prevTime => prevTime - intervalStep);
        }, intervalStep);

        return () => {
            clearInterval(interval);
        };
    }, [intervalStep]);

    return <progress id="question-time" value={timerRemaining} max={timeout} />
}