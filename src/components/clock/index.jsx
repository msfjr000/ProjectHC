import React, { useEffect, useState } from "react";
import './style.css'

function Clock() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    useEffect(() => {
        function updateClock() {
            const now = new Date();

            const day = String(now.getDate()).padStart(2, '0');
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const year = now.getFullYear();

            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            setDate(`${day}/${month}/${year}`);
            setTime(`${hours}:${minutes}:${seconds}`);
        }

        updateClock(); 
        const interval = setInterval(updateClock, 1000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div id="containerInside">
            <p id="date">{date}</p>
            <p id="clock">{time}</p>
        </div>
    );
}

export default Clock;
