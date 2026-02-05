import React from "react";
import { Link } from "react-router-dom";
import "./user.css";

function AdminSetting() {
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
      </div>
    </div>
  );
}

export default AdminSetting;
