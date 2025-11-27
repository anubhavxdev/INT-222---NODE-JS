import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

    const startStopwatch = () => {
        if (!isRunning) {
            setIsRunning(true);
            if (!timerRef.current) {
                timerRef.current = setInterval(() => {
                    setSeconds(prevSeconds => prevSeconds + 1);
                }, 1000);
            }
        }
    };
    const stopStopwatch = () => {
        if (isRunning) {
            setIsRunning(false);
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }
    };
    
    const resetStopwatch = () => {
        setIsRunning(false);
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setSeconds(0);
    };
    return (
        <div>
            <h1>Stopwatch</h1>
            <h2>{seconds} seconds</h2>
            <button onClick={startStopwatch}>Start</button>
            <button onClick={stopStopwatch}>Stop</button>
            <button onClick={resetStopwatch}>Reset</button>
        </div>
    );
}   