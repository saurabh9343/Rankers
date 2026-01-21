import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { USER_LOGIN, USER_LOGOUT } from "../../redux/reaction/action";
import "../Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);
  const loginuser = useSelector((state) => state.user.user);
  const loading = useSelector((state) => state.user.loading);

  // 🔐 BLOCK CHECK
  useEffect(() => {
    if (loginuser && loginuser.status === "blocked"){
      alert("Your account has been blocked");
      dispatch({
        type: USER_LOGOUT,
        payload: { navigate },
      });
    }
  }, [loginuser, dispatch, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: USER_LOGIN,
      payload: { email, password, navigate },
    });
  };

  return (
    <div className="login-page-wrapper d-flex justify-content-center align-items-center min-vh-100 px-3">
      {/* BACKGROUND ANIMATION */}
      <div className="ocean">
        <div className="bubbles"></div>
        <div className="moving-bottle b1"></div>
        <div className="moving-bottle b2"></div>
        <div className="moving-bottle b3"></div>
      </div>

      <div className="glass-overlay"></div>

      <div className="col-12 col-sm-10 col-md-8 col-lg-4 z-index-master">
        <form className="login-card shadow-lg" onSubmit={handleLogin}>
          <div className="logo-wrapper mb-4 text-center">
            <img
              src="/src/assets/rankers.jpg"
              alt="Rankers"
              className="login-logo shadow"
            />
          </div>

          <div className="text-center mb-4">
            <h3 className="fw-bold text-white mb-1">Welcome Back</h3>
            <p className=" small text-white-50">Please login to Rankers</p>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="input-group-custom mb-3">
            <label className="small fw-bold text-white-50">Email Address</label>
            <input
              type="email"
              className="form-control login-input"
              placeholder="user@rankers.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group-custom mb-4">
            <label className="small fw-bold text-white-50">Password</label>
            <input
              type="password"
              className="form-control login-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-login-primary w-100 py-3 shadow"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Login Securely"
            )}
          </button>

          <p className="signup text-center mt-4 text-white-50">
            Don’t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
