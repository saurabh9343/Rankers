import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

function UserNav() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  // LOAD USER DATA FROM LOCAL STORAGE
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // LOGOUT FUNCTION
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="btn btn-primary d-lg-none w-100 rounded-0 mb-2 slide-down"
        onClick={() => setOpen(!open)}
      >
        ☰ Menu
      </button>

      {/* SIDEBAR */}
      <div className={`admin-sidebar ${open ? "active" : ""}`}>
        {open && (
          <button
            className="close-btn d-lg-none"
            onClick={() => setOpen(false)}
          >
            ✖
          </button>
        )}

        {/* PROFILE BOX */}
        <div className="profile-box fade-in text-center">
          <img
            src="/src/assets/rankers.jpg"
            className="profile-img"
            alt="profile"
          />

          <h5 className="fw-bold m-1">Hi, {user.name || "User"}</h5>
          <small>EMAIL : {user.email || "loading..."}</small>
        </div>

        {/* MENU LIST */}
        <ul className="nav flex-column gap-5 menu-list m-3">
          <li className="nav-item menu-item slide-right">
            <Link className="btn btn-light w-100 text-start" to="/video">
              📹 Video
            </Link>
          </li>

          <li className="nav-item menu-item slide-right">
            <Link className="btn btn-light w-100 text-start" to="/test-series">
              📚 Test-Series
            </Link>
          </li>

          <li className="nav-item menu-item slide-right">
            <Link className="btn btn-light w-100 text-start" to="/images">
              🖼️ Images
            </Link>
          </li>

          <li className="nav-item menu-item slide-right">
            <button className="btn w-100 text-start" onClick={handleLogout}>
              🔓 Logout
            </button>
          </li>
        </ul>
      </div>

      {open && <div className="sidebar-backdrop" onClick={() => setOpen(false)} />}
    </>
  );
}

export default UserNav;
