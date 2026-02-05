import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import UserNav from "../user/UserNav";

function UserLayout() {
  const sidebarWidth = 265;
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const resize = () => setIsLargeScreen(window.innerWidth >= 992);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <UserNav />

      {/* OUTER CONTAINER */}
      <div
        style={{
          marginLeft: isLargeScreen ? sidebarWidth : 0,
          height: "100vh",
          overflow: "hidden",
          background: "#f5f7fb",
          transition: "margin-left 0.3s",
        }}
      >
        {/* INNER SCROLL CONTAINER */}
        <div
          style={{
            height: "100%",
            overflowY: "auto",
            padding: "1rem",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default UserLayout;
