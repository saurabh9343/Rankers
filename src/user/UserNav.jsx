import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../redux/reaction/action";
import "./user.css";

function UserNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({ type: types.USER_LOAD });
  }, [dispatch]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout 🚪?")) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: { navigate },
      });
    }
  };

  const menuItems = [
    { name: "Dashboard", icon: "bi-grid-1x2-fill", link: "/dashboard" },
    { name: "Blogs", icon: "bi-journal-richtext", link: "/blog" },
    { name: "Test-Series", icon: "bi-card-checklist", link: "/test-series" },
    { name: "Our Courses", icon: "bi-play-btn-fill", link: "/course" },
    { name: "Setting", icon: "bi-gear-wide-connected", link: "/setting" },
  ];

  return (
    <>
      <div className="d-lg-none mobile-nav-header px-4 py-3 d-flex align-items-center justify-content-between shadow-sm">
        <div className="d-flex align-items-center gap-2">
          <img
            src="/src/assets/rankers.jpg"
            width="30"
            alt="logo"
            className="rounded-3"
          />
          <h5 className="mb-0 fw-bold">Rankers</h5>
        </div>

        <button className="hamburger-btn" onClick={() => setOpen(true)}>
          <i className="bi bi-list"></i>
        </button>
      </div>

      {open && (
        <div
          className="sidebar-backdrop d-lg-none"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={`admin-sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-inner h-100 d-flex flex-column position-relative">
          <button
            className="mobile-close-btn d-lg-none"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <i className="bi bi-x-lg"></i>
          </button>

          <div className="sidebar-header-section p-4 text-center">
            <div className="profile-wrapper mb-3">
              <img
                src="/src/assets/rankers.jpg"
                className="profile-avatar shadow-lg"
                alt="profile"
              />
              <span className="status-dot online" />
            </div>

            <h6 className="admin-name mb-0">
              {user?.name || "User Name"}
            </h6>
            <div className="online-badge">
              <span className="dot"></span> Active
            </div>
          </div>

          <div className="sidebar-menu-wrapper px-3 overflow-auto">
            <p className="menu-label px-3 mb-2">MAIN MENU</p>

            <ul className="nav flex-column gap-1">
              {menuItems.map((item, i) => (
                <li key={i} className="nav-item">
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={`nav-link menu-item-link ${location.pathname === item.link ? "active" : ""
                      }`}
                  >
                    <div className="icon-container">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="menu-text">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-footer-section p-4 mt-auto">
            <button
              className="btn w-100 btn-outline-danger"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-left me-2"></i>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserNav;
