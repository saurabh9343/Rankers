import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";
// import img from "../assets/images/rankers"

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    if (currentUser) {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } else {
      alert("You are not logged in!");
    }
  };

  return (
    <>
      <div className="top">
        <div className="container-fluid bg-dark py-2 ">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block ">
              <div className="row d-flex ">
                <div className="col-md pr-4 d-flex topper align-items-center ">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2"></span>
                  </div>
                  <span className="text">
                    401, Arcade Silver, 56 Dukan Palasia, Indore, 452001
                  </span>
                </div>

                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <span className="text">DevQsoft@gmail.com</span>
                </div>

                <div className="col-md-5 pr-4 d-flex  align-items-center text-lg-right justify-content-end">
                  <p className="mb-0 register-link">
                    Phone NO - +91 9343418980
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target "
        id="ftco-navbar"
      >
        <div className="container">
          {/* <a className="navbar-brand mt-3" href="index.html">
            RANKERS
          </a> */}
          <img
            src="\src\assets\rankers-Nobg.png"
            alt=""
            height="100px"
            width="100px"
          />

          <button
            className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav nav ml-auto mt-3">
              {/* If NOT logged in → show Login + Signup */}
              {!currentUser && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-dark">
                      <span>Login</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/signup" className="nav-link text-dark">
                      <span>Signup</span>
                    </Link>
                  </li>
                </>
              )}

              {/* If logged in → show QBank + Logout */}
              {currentUser && (
                <>
                  <li className="nav-item">
                    <Link to="/dashboard" className="nav-link text-dark">
                      <span>QBank</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <button
                      onClick={handleLogout}
                      className="btn btn-danger ml-3"
                      style={{ height: "40px", marginTop: "5px" }}
                    >
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
