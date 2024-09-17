import { useState } from "react";
import '../index.css';


export default function ToggleBtn({navbarOpen, handleToggle}: {navbarOpen: boolean, handleToggle: () => void}) {
    return(
    <button className="icon d-lg-none text-black " onClick={(event) => { event.preventDefault(); handleToggle() }}>
        <i className={`fa ${navbarOpen ? 'fa-times' : 'fa-bars'}`}></i>
    </button>
    )
}

