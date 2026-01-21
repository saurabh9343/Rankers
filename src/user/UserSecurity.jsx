import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

function UserSecurity() {
  const navigate = useNavigate();

  const securityPolicies = [
    {
      title: "Authorized Access",
      text: "This admin panel is strictly restricted to authorized administrators. Any unauthorized access or attempt to bypass security is prohibited.",
      icon: "🔐",
    },
    {
      title: "User Data Responsibility",
      text: "Admin is responsible for handling user data securely. Misuse, leakage, or unauthorized modification of user data is not allowed.",
      icon: "📊",
    },
    {
      title: "User Block / Unblock Policy",
      text: "Admin can block or unblock users only in case of valid violations. Blocking users without proper reason may result in admin access review.",
      icon: "🚫",
    },
    {
      title: "Account Security",
      text: "Admin must keep login credentials confidential. Sharing passwords or using weak passwords is strictly discouraged.",
      icon: "🔑",
    },
    {
      title: "System Misuse",
      text: "Any attempt to manipulate data, abuse system features, or perform illegal activities will lead to immediate suspension of admin access.",
      icon: "⚠️",
    },
    {
      title: "Activity Monitoring",
      text: "Admin activities such as login, user management, and updates may be logged and monitored for security purposes.",
      icon: "🖥️",
    },
    {
      title: "Logout Responsibility",
      text: "Admin must logout after using the panel, especially on shared devices. Admin will be responsible for any misuse due to improper logout.",
      icon: "🚪",
    },
    {
      title: "Policy Updates",
      text: "The system owner reserves the right to update these terms at any time. Admin is expected to comply with updated policies.",
      icon: "🔄",
    },
  ];

  return (
    <div className="security-page-bg min-vh-100 py-4">
      <div className="container     ">
        <button
          className="btn btn-light shadow-sm fw-bold rounded-pill px-4 transition-all"
          onClick={() => navigate("/setting")}
        >
          ← Back To Setting
        </button>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="text-center mb-5 fade-in">
              <h2 className="display-12 fw-bold security-title">
                Admin Security & Terms
              </h2>
              <div className="title-divider mx-auto"></div>
              <p className="text-muted mt-3">
                Legal guidelines and operational protocols for administrators
              </p>
            </div>
            <div className="card w-100 border-0 shadow-lg rounded-4 overflow-hidden mb-5 slide-up">
              <div className="card-header bg-dark py-3 px-4">
                <h5 className="text-white mb-0 small text-uppercase letter-spacing">
                  Official Protocol v1.0
                </h5>
              </div>

              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  {securityPolicies.map((item, index) => (
                    <div
                      key={index}
                      className="list-group-item p-4 border-bottom-light policy-item"
                    >
                      <div className="d-flex align-items-start gap-3">
                        <span className="policy-icon">{item.icon}</span>
                        <div>
                          <h6 className="fw-bold text-dark mb-1">
                            {index + 1}. {item.title}
                          </h6>
                          <p className="text-muted small mb-0 lh-base">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-footer bg-light p-4 text-center">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <div className="pulse-dot"></div>
                  <span className="small fw-bold text-secondary">
                    Compliance Active
                  </span>
                </div>
                <p className="small text-muted mb-0 italic">
                  By continuing to use the admin panel, you agree to follow all
                  the above terms and security policies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSecurity;
