import { useState, useEffect } from "react";

export default function TimeDate() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []); 

    return (
        <div className="time-date--container">
            <p>🕒{dateTime.toLocaleString().split(", ")[0]}</p>
            <p>📅{dateTime.toLocaleString().split(", ")[1]}</p>
        </div>
    )
}