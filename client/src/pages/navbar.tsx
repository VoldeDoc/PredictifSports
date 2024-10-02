import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLinks from '../component/navbarlinks';
import ToggleBtn from '../component/toggleBtn';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    };

    return (
        <>
            <header className="fixed top-0 container-fluid z-10 mb-8">
                <nav className={`navbar ${navbarOpen ? 'responsive' : ''}`} id="myNavbar">
                    <div className="flex justify-between items-center w-full links">
                        <div className="navbar-brand">
                            <Link to="/">
                                <img src="/Logo.png" alt="navbar logo" className="logo " width="300" height="24" />
                            </Link>
                        </div>
                        <div className="flex justify-center w-full">
                            <div className="navbar-links space-x-6 flex items-center">
                                <NavbarLinks />
                                <Link to='/login'>
                                    <button className='bg-blue-900 text-white rounded px-4 py-2'>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <ToggleBtn navbarOpen={navbarOpen} handleToggle={handleToggle} />
                    </div>
                </nav>
            </header>
        </>
    );
}