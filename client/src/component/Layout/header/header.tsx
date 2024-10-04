import { FaBell, FaCaretDown, FaMagnifyingGlass } from "react-icons/fa6";
import { RiSettings5Fill } from "react-icons/ri";

interface Props {
  page?: string;
  menuToggleButtonRef: React.RefObject<HTMLButtonElement>;
}

export default function Header({ page = "Dashboard", menuToggleButtonRef }: Props) {



  return (
    <>
      {/* <!-- ========== header start ========== --> */}
      <header className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-6">
                <div className="header-left d-flex align-items-center">
                  <div className="header-title d-none d-md-flex">
                    <h4 className='text-3xl font-bold'>{page}</h4>
                  </div>
                  <div className="menu-toggle-btn mr-20">
                    <button id="menu-toggle" className="main-btn primary-btn btn-hover" ref={menuToggleButtonRef}>
                      <i className="fa-solid fa-caret-left me-2"></i>
                    </button>
                  </div>
                  <div className="header-search d-none d-lg-flex space-x-6">
                    <form action="#">
                      <input type="text" placeholder="Search here" />
                      <button role="link"><FaMagnifyingGlass /></button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-7 col-6">
                <div className="header-right ml-2 d-flex align-items-center justify-content-end">
                  <div className="country flex space-x-3 justify-center align-center  d-none d-sm-flex">
                    <img src="/United.jpg" alt="" width="20" height="10" />
                    <span>ENG (US)</span>
                    <FaCaretDown />
                  </div>

                  {/* Notifications */}
                  <div className="header-message-box ml-15 d-none d-md-flex">
                    <button className="dropdown-toggle" type="button" id="notificationDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                      <FaBell className="text-lg" />
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
                      <RiSettings5Fill className="text-lg" />
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
      {/* <!-- ========== header end ========== --> */}
    </>
  );
}
