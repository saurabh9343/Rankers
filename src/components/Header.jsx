// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Header() {
//   const Navigate = useNavigate();

//   return (
//     <div className="container-p">
//       <nav className="navbar navbar-expand-lg shadow-sm py-3 custom-nav border-c">
//         <div className="container">
//           {/* LEFT LOGO */}
//           <Link
//             className="navbar-brand fw-bold d-flex align-items-center "
//             to="/"
//           >
//             <span className="logo-badge m-2"></span>
//             Rankers
//           </Link>

//           {/* MOBILE TOGGLE */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* COLLAPSIBLE MENU */}
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               {/* LOGIN BUTTON FOR MOBILE */}
//               <li className="nav-item text-center d-lg-none mt-2">
//                 <Link className="btn-head px-4  mx-auto" to="/login">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* LOGIN BUTTON FOR DESKTOP */}
//           <div className="d-none d-lg-block">
//             <Link className="btn-head px-4 d-block mx-auto " to="/login">
//               Login
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Header;


import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-p">
      <nav className="navbar navbar-expand-lg py-0 custom-nav shadow-lg">
        <div className="container-fluid px-lg-5">

          {/* LEFT LOGO */}
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <div className="logo-badge me-2"></div>
            <span className="brand-text">Rankers</span>
          </Link>

          {/* MOBILE TOGGLE - Modern Style */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon-custom"></span>
          </button>

          {/* COLLAPSIBLE MENU */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center py-3 py-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active fw-medium" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/about">About</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fw-medium" to="/courses">Courses</Link>
              </li>
              {/* LOGIN FOR MOBILE - Only visible in collapse */}
              <li className="nav-item d-lg-none mt-3">
                <Link className="btn-head px-4  mx-auto" to="/login">Login </Link>
              </li>
            </ul>
          </div>

          {/* LOGIN BUTTON FOR DESKTOP */}
          <div className="d-none d-lg-block">
            <Link className="btn-head px-4 py-2 fw-bold shadow-sm " to="/login">Login</Link>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Header;
