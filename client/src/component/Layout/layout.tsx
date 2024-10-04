import React, { useEffect, useRef } from "react";
import "../../styles/layout.css";
import Header from "./header/header";
import SideBar from "./sidebar/sidebar";

interface Props {
  children: React.ReactNode;
  toggleSidebar: () => void;
}

function Layout({ children, toggleSidebar }: Props) {
  
  const sidebarNavWrapperRef = useRef<HTMLDivElement | null>(null);
  const mainWrapperRef = useRef<HTMLDivElement | null>(null);
  const menuToggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sidebarNavWrapper = sidebarNavWrapperRef.current;
    const mainWrapper = mainWrapperRef.current;
    const menuToggleButton = menuToggleButtonRef.current;
    const overlay = overlayRef.current;

    if (!sidebarNavWrapper || !mainWrapper || !menuToggleButton || !overlay) {
      return;
    }

    const menuToggleButtonIcon = menuToggleButton.querySelector("i");

    if (!menuToggleButtonIcon) {
      return;
    }

    const handleMenuToggle = () => {
      toggleSidebar();
      sidebarNavWrapper.classList.toggle("active");
      overlay.classList.toggle("active");
      mainWrapper.classList.toggle("active");
      mainWrapper.classList.toggle("dashboardy");

      if (document.body.clientWidth > 1200) {
        if (menuToggleButtonIcon.classList.contains("fa-caret-left")) {
          menuToggleButtonIcon.classList.remove("fa-caret-left");
          menuToggleButtonIcon.classList.add("fa-bars");
        } else {
          menuToggleButtonIcon.classList.remove("fa-bars");
          menuToggleButtonIcon.classList.add("fa-caret-left");
        }
      } else {
        if (menuToggleButtonIcon.classList.contains("fa-caret-left")) {
          menuToggleButtonIcon.classList.remove("fa-caret-left");
          menuToggleButtonIcon.classList.add("fa-bars");
        }
      }
    };

    const handleOverlayClick = () => {
      sidebarNavWrapper.classList.remove("active");
      overlay.classList.remove("active");
      mainWrapper.classList.remove("active");
      mainWrapper.classList.remove("content-wrapper");
    };

    menuToggleButton.addEventListener("click", handleMenuToggle);
    overlay.addEventListener("click", handleOverlayClick);

    return () => {
      menuToggleButton.removeEventListener("click", handleMenuToggle);
      overlay.removeEventListener("click", handleOverlayClick);
    };
  }, [toggleSidebar]);

  return (
    <>
      <SideBar
        sidebarNavWrapperRef={sidebarNavWrapperRef}
        overlayRef={overlayRef}
      />
      <main className="main-wrapper">
        <Header page="Dashboard" menuToggleButtonRef={menuToggleButtonRef} />
      </main>
      <div className="content-wrapper">
        <div className="container-sm max-auto mt-5">{children}</div>
      </div>
    </>
  );
}

export default Layout;
