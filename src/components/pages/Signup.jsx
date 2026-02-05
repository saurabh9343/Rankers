import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";
import { useDispatch, useSelector } from "react-redux";
import { UserSignup } from "../../redux/reaction/action";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading } = useSelector((state) => state.user);

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(UserSignup({ name, email, password, navigate }));
  };

  return (
    <div className="login-page-wrapper d-flex justify-content-center align-items-center min-vh-100 px-3">
      
      <div className="ocean">
        <div className="bubbles"></div>
        <div className="moving-bottle b1"></div>
        <div className="moving-bottle b2"></div>
        <div className="moving-bottle b3"></div>
      </div>

      <div className="glass-overlay"></div>

      <div className="col-12 col-sm-10 col-md-8 col-lg-4 z-index-master my-2">

        {/* 👇 padding kam ki */}
        <form className="login-card shadow-lg p-3" onSubmit={handleSignup}>

          {/* 👇 logo margin kam */}
          <div className="logo-wrapper mb-2 text-center">
            <img
              src="/src/assets/rankers.jpg"
              alt="Rankers"
              className="login-logo shadow"
            />
          </div>

          {/* 👇 header spacing kam */}
          <div className="text-center mb-3">
            <h5 className="fw-bold text-white mb-1">Create Account</h5>
            <p className="text-white-50 small mb-0">Join Rankers today</p>
          </div>

          {error && <div className="alert alert-danger py-1">{error}</div>}

          {/* NAME */}
          <div className="input-group-custom mb-2">
            <label className="small fw-bold text-white-50">Full Name</label>
            <input
              type="text"
              className="form-control login-input py-2"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="input-group-custom mb-2">
            <label className="small fw-bold text-white-50">Email Address</label>
            <input
              type="email"
              className="form-control login-input py-2"
              placeholder="user@rankers.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group-custom mb-3">
            <label className="small fw-bold text-white-50">Password</label>
            <input
              type="password"
              className="form-control login-input py-2"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* 👇 button height kam */}
          <button
            type="submit"
            className="btn btn-login-primary w-100 py-2 shadow"
            disabled={loading}
          >
            {loading ? (
              <span className="spinner-border spinner-border-sm"></span>
            ) : (
              "Create Account"
            )}
          </button>

          {/* 👇 footer margin kam */}
          <p className="signup text-center mt-3 mb-0 text-white-50 small">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Signup;
