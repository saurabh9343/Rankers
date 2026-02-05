import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../redux/reaction/action";
import "../Login.css";

function ChangePass() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, passwordChanged } = useSelector((state) => state.user);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    dispatch(
      changePassword({
        currentPassword,
        newPassword,
        navigate,
      }),
    );
  };

  return (
    <>
      <div className="login-page-wrapper d-flex justify-content-center align-items-center min-vh-100 px-3">
        <div className="ocean">
          <div className="bubbles"></div>
          <div className="moving-bottle b1"></div>
          <div className="moving-bottle b2"></div>
          <div className="moving-bottle b3"></div>
        </div>

        <div className="glass-overlay"></div>

        <div className="col-12 col-sm-10 col-md-8 col-lg-4 z-index-master">
          <form className="login-card shadow-lg " onSubmit={handleSubmit}>
         
            <div className="text-center mb-4">
              <h3 className="fw-bold text-white mb-1">Change Password</h3>
              <p className="small text-white-50">
                Update your account password
              </p>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {passwordChanged && (
              <div className="alert alert-success">
                Password changed successfully!
              </div>
            )}

            <div className="input-group-custom mb-3">
              <label className="small fw-bold text-white-50">
                Current Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                placeholder="••••••••"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group-custom mb-3">
              <label className="small fw-bold text-white-50">
                New Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                placeholder="••••••••"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group-custom mb-4">
              <label className="small fw-bold text-white-50">
                Confirm New Password
              </label>
              <input
                type="password"
                className="form-control login-input"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-login-primary w-100 py-3 shadow"
            > Change Password</button>

            <p className="signup text-center mt-4 text-white-50">
              Back to <Link to="/dashboard">Dashboard</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default ChangePass;
