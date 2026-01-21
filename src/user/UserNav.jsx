import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import "./user.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../redux/reaction/action";

function UserNav() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // ✅ correct selector
  const { user, isLogin } = useSelector((state) => state.user);

  /* =========================
     LOAD USER (Saga handles localStorage)
  ========================= */
  useEffect(() => {
    dispatch({ type: types.USER_LOAD });
  }, [dispatch]);

  

  return (
    <>
      {/* MOBILE TOGGLE */}
      <button
        className="btn btn-primary d-lg-none w-100 rounded-0 mb-2"
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

        {/* PROFILE */}
        <div className="profile-box text-center">
          <img
            src="/src/assets/rankers.jpg"
            className="profile-img"
            alt="profile"
          />

          <h5 className="fw-bold m-1">Hi, {user?.name || "User"}</h5>
          <small>EMAIL : {user?.email || "loading..."}</small>
        </div>

        {/* MENU */}
        <ul className="nav flex-column gap-2 m-3">
          <li>
            <Link className="btn btn-light w-100 text-start" to="/dashboard">
              📹 Dashboard
            </Link>
          </li>
          <li>
            <Link className="btn btn-light w-100 text-start" to="/video">
              📹 Video
            </Link>
          </li>

          <li>
            <Link className="btn btn-light w-100 text-start" to="/test-series">
              📚 Test-Series
            </Link>
          </li>

          <li>
            <Link className="btn btn-light w-100 text-start" to="/images">
              🖼️ Images
            </Link>
          </li>

          <li>
            <Link className="btn btn-light w-100 text-start" to="/setting">
              ⚙️ Setting
            </Link>
          </li>
        </ul>
      </div>

      {open && (
        <div className="sidebar-backdrop" onClick={() => setOpen(false)} />
      )}
    </>
  );
}

export default UserNav;
