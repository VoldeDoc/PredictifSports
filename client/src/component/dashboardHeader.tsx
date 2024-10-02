import React from 'react';
import { NavLink } from 'react-router-dom';
import '../dashboard.css';
export default function DashHeader() {
    return (
        <>
            {/* // <!-- ======== sidebar-nav start =========== --> */}
            <aside className="sidebar-nav-wrapper">
                <div className="navbar-logo">
                    <a href="#">
                        <img src="/Logo.png" alt="" />
                    </a>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li className="nav-item">
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <img src="/Vector (3).png" alt="" />
                                <span className="text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/prematch-alerts"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <img src="/Vector (1).png" alt="" />
                                <span className="text">Prematch Alerts</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/inplay-alerts"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <img src="/inplay.png" alt="" />
                                <span className="text">Inplay Alerts</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/fixtures"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <img src="/Vector (1).png" alt="" />
                                <span className="text">Fixtures</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/daily-predictivo"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                <img src="/daily.png" alt="" />
                                <span className="text">Daily Predictivo</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="friends px-3 mt-40 mb-20 shadow-lg py-5">
                    <div className='flex'>
                        <div>
                            <h1 className='text-dark font-bold text-2xl'>Invite freinds </h1>
                            <h1 className='text-dark font-bold text-2xl'>and get 5%</h1>
                        </div>
                        <div>
                            <img src="/Medal.jpg" alt="" />
                        </div>
                    </div>
                    <p className='text-gray py-3'>Upgrade to premium to get premium features</p>
                    <button className='bg-blue-700 px-4 py-2 rounded-lg text-white shadow'>Invite</button>
                </div>

            </aside>
            <div className="overlay"></div>
            {/* <!-- ======== sidebar-nav end =========== --> */}

            {/* <!-- ======== main-wrapper start =========== --> */}
            <main className="main-wrapper">
                {/* <!-- ========== header start ========== --> */}
                <header className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-6">
                                <div className="header-left d-flex align-items-center">
                                    <div className="header-title d-none d-md-flex">
                                        <h4 className='text-3xl font-bold'>Dashboard</h4>
                                    </div>
                                    <div className="menu-toggle-btn mr-20">
                                        <button id="menu-toggle" className="main-btn primary-btn btn-hover">
                                            <i className="fa-solid fa-caret-left me-2"></i>
                                        </button>
                                    </div>
                                    <div className="header-search d-none d-lg-flex space-x-6">
                                        <form action="#">
                                            <input type="text" placeholder="Search here" />
                                            <button role="link"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-7 col-6">
                                <div className="header-right ml-2 d-flex align-items-center justify-content-end">
                                    <div className="country flex space-x-3 justify-center align-center  d-none d-sm-flex">
                                        <img src="/United.jpg" alt="" width="20" height="10" />
                                        <span>ENG (US)</span>
                                        <i className="fa-solid fa-caret-down"></i>
                                    </div>


                                    {/* Notifications */}
                                    <div className="header-message-box ml-15 d-none d-md-flex">
                                        <button className="dropdown-toggle" type="button" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="../Bell.jpg" alt="" width="20" height="10" />
                                            <span></span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
                                            <li>
                                                <a href="#0">
                                                    <div className="image">
                                                        <img src="assets/Frame 1000003208 (3).png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6>Ronaldo</h6>
                                                        <p>Hey! I came across your profile and ...</p>
                                                        <span>10 mins ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <div className="image">
                                                        <img src="assets/Frame 1000003208 (2).png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6>Messi</h6>
                                                        <p>Would you mind please checking out</p>
                                                        <span>12 mins ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <div className="image">
                                                        <img src="assets/Frame 1000003208 (4).png" alt="" />
                                                    </div>
                                                    <div className="content">
                                                        <h6>Kdb</h6>
                                                        <p>Hey! Are you available for freelance?</p>
                                                        <span>1h ago</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Settings */}
                                    <div className="header-message-box ml-15 pl-5 d-none d-md-flex">
                                        <button className="dropdown-toggle" type="button" id="settingsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src="/Vector.png" alt="" width="20" height="10" />
                                        </button>
                                    </div>



                                    {/* Profile */}
                                    <div className="profile-box ">
                                        <button className="dropdown-toggle profile-button pt-4 pb-4" type="button" id="profileDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            <div className="profile-info">
                                                <div className="info">
                                                    <div className="image">
                                                        <img src="/Rectangle.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>

                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileDropdown">
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-user"></i> View Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-alarm"></i> Notifications
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-inbox"></i> Messages
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-cog"></i> Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#0">
                                                    <i className="lni lni-exit"></i> Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </main>
            {/* <!-- ========== header end ========== --> */}
        </>
    )
}
