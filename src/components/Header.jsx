import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const scrollToCourses = () => {
    const el = document.getElementById("courses");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container-p">
      <nav className="navbar navbar-expand-lg py-0 custom-nav shadow-lg">
        <div className="container-fluid px-lg-5">

          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <div className="logo-badge me-2"></div>
            <span className="brand-text">Rankers</span>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon-custom"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center py-3 py-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/">Home</Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/about">About</Link>
              </li>

              <li className="nav-item mx-2">
                <button
                  className="nav-link fw-medium bg-transparent border-0"
                  onClick={scrollToCourses}
                >
                  Courses
                </button>
              </li>

              <li className="nav-item d-lg-none mt-3">
                <Link className="btn-head px-4 mx-auto" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-none d-lg-block">
            <Link className="btn-head px-4 py-2 fw-bold shadow-sm" to="/login">
              Login
            </Link>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Header;
