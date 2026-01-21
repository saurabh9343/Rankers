import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as types from "../redux/reaction/action";
import "./user.css";

function AdminSetting() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* =========================
     LOGOUT FROM SETTINGS
  ========================= */
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout 🚪?")) {
      dispatch({
        type: types.USER_LOGOUT,
        payload: { navigate },
      });
    }
  };

  const settingItems = [
    {
      title: "Change Password",
      desc: "Update your account security credentials",
      icon: "🔐",
      path: "/user/changePassword",
      color: "#e0e7ff",
      textColor: "#4338ca",
    },
    {
      title: "Security Settings",
      desc: "Manage two-factor and session logs",
      icon: "🛡️",
      path: "/user/security",
      color: "#dcfce7",
      textColor: "#15803d",
    },
  ];

  return (
    <div className="container settings-container py-5">
      <h3 className="fw-bold mb-2">Settings</h3>
      <p className="text-muted">Manage your portal preferences and security</p>

      <div className="list-group list-group-flush">
        {settingItems.map((items, index) => (
          <Link
            key={index}
            to={items.path}
            className="list-group-item setting-card d-flex justify-content-between p-4 border-0"
          >
            <div className="d-flex align-items-center">
              <div
                className="icon-box1 me-3"
                style={{ background: items.color, color: items.textColor }}
              >
                {items.icon}
              </div>
              <div>
                <h6 className="fw-bold mb-0">{items.title}</h6>
                <small className="text-muted">{items.desc}</small>
              </div>
            </div>
            <i className="bi bi-chevron-right"></i>
          </Link>
        ))}

        {/* LOGOUT */}
        <div
          className="list-group-item setting-card d-flex justify-content-between p-4 border-0 text-danger"
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          <div className="d-flex align-items-center">
            <div
              className="icon-box1 me-3"
              style={{ background: "#fee2e2", color: "#dc2626" }}
            >
              🚪
            </div>
            <div>
              <h6 className="fw-bold mb-0">Logout Account</h6>
              <small className="opacity-75">
                Safely sign out from this session
              </small>
            </div>
          </div>
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default AdminSetting;
