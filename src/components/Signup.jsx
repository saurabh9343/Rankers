import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "../Firebase";
import { addDoc, collection } from "firebase/firestore";
import "./Login.css"; // ✅ Use same CSS file as login (you can rename it to Auth.css)

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        uid: data.user.uid,
        name: name,
        email: email,
        createdAt: new Date(),
      });

      await signOut(auth);
      alert("Signup successful!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container mt-4">
      <form className="form" onSubmit={handleSignup}>
        <p>
          Create Account <br />
          <span>Join Marrow today</span>
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="oauthButton" type="submit">
          Sign Up
        </button>

        <div className="separator">
          <div></div>
          <span>or</span>
          <div></div>
        </div>

        <h6 className="fw-bold">
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#4e7780ff", textDecoration: "none" }}
          >
            Login
          </Link>
        </h6>
      </form>
    </div>
  );
}

export default Signup;
