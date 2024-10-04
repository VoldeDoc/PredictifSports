import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaCalendar, FaUserGroup, FaUser } from "react-icons/fa6";

interface Props {
  sidebarNavWrapperRef: React.RefObject<HTMLDivElement>;
  overlayRef: React.RefObject<HTMLDivElement>;
}

const SideBar = ({ sidebarNavWrapperRef, overlayRef }: Props) => {

  return (
    <>
      {/* // <!-- ======== sidebar-nav start =========== --> */}
      <aside className="sidebar-nav-wrapper" ref={sidebarNavWrapperRef}>
        <div className="navbar-logo">
          <a href="#">
            <img src="/Logo.png" alt="" />
          </a>
        </div>
        <aside className="sidebar-nav">
          <ul>
            <li className="nav-item">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <RxDashboard className="text-2xl mr-2" color="#504A4A" />
                <span className="text">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/prematch-alerts"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FaCalendar className="text-2xl mr-2" color="#504A4A" />
                <span className="text">Prematch Alerts</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/inplay-alerts"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FaUserGroup className="text-2xl mr-2" color="#504A4A" />
                <span className="text">Inplay Alerts</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/fixtures"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <FaUser className="text-2xl mr-2" color="#504A4A" />
                <span className="text">Fixtures</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/daily-predictivo"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3998 0.840027H6.59984C5.07292 0.842397 3.60922 1.45001 2.52953 2.52971C1.44983 3.60941 0.842213 5.07311 0.839844 6.60003V19.4C0.842213 20.9269 1.44983 22.3906 2.52953 23.4703C3.60922 24.55 5.07292 25.1577 6.59984 25.16H19.3998C20.9268 25.1577 22.3905 24.55 23.4702 23.4703C24.5499 22.3906 25.1575 20.9269 25.1598 19.4V6.60003C25.1575 5.07311 24.5499 3.60941 23.4702 2.52971C22.3905 1.45001 20.9268 0.842397 19.3998 0.840027ZM20.3982 13.64H16.9934L14.843 17.8768C14.791 17.9814 14.7106 18.0693 14.611 18.1304C14.5114 18.1915 14.3967 18.2234 14.2798 18.2224H14.2414C14.1174 18.2181 13.9975 18.1768 13.8972 18.1038C13.7968 18.0308 13.7206 17.9295 13.6782 17.8128L11.0926 11.144L9.95344 13.2944C9.90262 13.4 9.8225 13.4887 9.72264 13.55C9.62277 13.6113 9.50738 13.6425 9.39024 13.64H5.60144C5.4317 13.64 5.26892 13.5726 5.1489 13.4526C5.02887 13.3326 4.96144 13.1698 4.96144 13C4.96144 12.8303 5.02887 12.6675 5.1489 12.5475C5.26892 12.4275 5.4317 12.36 5.60144 12.36H9.00624L10.619 9.31363C10.6738 9.2029 10.7602 9.11093 10.8673 9.0494C10.9744 8.98786 11.0974 8.95954 11.2206 8.96803C11.344 8.97464 11.4629 9.01683 11.5628 9.08952C11.6628 9.1622 11.7395 9.26227 11.7838 9.37763L14.3566 16.0208L16.0334 12.7056C16.0904 12.6023 16.1737 12.5159 16.2749 12.4552C16.376 12.3945 16.4915 12.3616 16.6094 12.36H20.3982C20.568 12.36 20.7308 12.4275 20.8508 12.5475C20.9708 12.6675 21.0382 12.8303 21.0382 13C21.0382 13.1698 20.9708 13.3326 20.8508 13.4526C20.7308 13.5726 20.568 13.64 20.3982 13.64Z"
                    fill="#504A4A"
                  />
                </svg>

                <span className="text">Daily Predictivo</span>
              </NavLink>
            </li>
          </ul>
        </aside>

        <div className="friends px-3 mt-40 mb-20 shadow-lg py-5">
          <div className="flex">
            <div>
              <h1 className="text-dark font-bold text-2xl">Invite freinds </h1>
              <h1 className="text-dark font-bold text-2xl">and get 5%</h1>
            </div>
            <div>
              <img src="/Medal.jpg" alt="" />
            </div>
          </div>
          <p className="text-gray py-3">
            Upgrade to premium to get premium features
          </p>
          <button className="bg-blue-700 px-4 py-2 rounded-lg text-white shadow">
            Invite
          </button>
        </div>
      </aside>
      <div className="overlay" ref={overlayRef}></div>
      {/* <!-- ======== sidebar-nav end =========== --> */}
    </>
  );
};

export default SideBar;
