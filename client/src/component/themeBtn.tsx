
import React from "react";
import '../index.css';

export default function ThemeBtn({darkMode, toggleDarkMode}: {darkMode: boolean, toggleDarkMode: (value: boolean) => void}) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        toggleDarkMode(event.target.checked);
    }

    return (
        <>
            <input type="checkbox" className="checkbox" id="checkbox" checked={darkMode} onChange={handleChange}/>
            <label htmlFor="checkbox" className="checkbox-label ">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </>
    )
}