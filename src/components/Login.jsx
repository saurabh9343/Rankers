import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // 🔥 Save token for navbar hide/show & logout
      const token = userCredential.user.accessToken;
      localStorage.setItem("token", token);
      console.log(token);

      // 🔥 Save user email + auto name
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: userCredential.user.email,
          name: userCredential.user.email.split("@")[0],
        })
      );

      alert("Login successful!");
      navigate("/dashboard"); // redirect
    } catch (error) {
      alert("Please enter your correct email or password!");
    }
  };

  return (
    <div className="login-container">
      <form className="form" onSubmit={handleLogin}>
        <p>
          Welcome Back!
          <span>Please login to Marrow </span>
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="oauthButton">
          Login
        </button>

        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <Link
          to="/signup"
          className="fw-bold text-dark"
          style={{ textDecoration: "none" }}
        >
          Don’t have an account? Sign up
        </Link>
      </form>
    </div>
  );
}

export default Login;
