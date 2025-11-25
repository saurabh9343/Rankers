import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import UserNav from '../user/UserNav';

const LayoutWithoutNav = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const sidebarWidth = 260;

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <UserNav />

      <div
        style={{
          marginLeft: isLargeScreen ? `${sidebarWidth}px` : 0,
          padding: "1rem",
          minHeight: "100vh",
          background: "#f5f7fb",
          transition: "margin-left 0.3s"
        }}
      >
        <Outlet />
      </div>
    </>
  )
}

export default LayoutWithoutNav;
