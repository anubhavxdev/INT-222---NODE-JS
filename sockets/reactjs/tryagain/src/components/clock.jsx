import React, {useState} from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000);

    return (
        <div>
            <h1>Current Time</h1>
            <h2>{time}</h2>
        </div>
    );
}