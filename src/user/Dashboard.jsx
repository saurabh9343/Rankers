import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="container-fluid dashboard-container">
      {/* HEADING */}
      <div className=" fade-slide">
        <h3 className=" backbtn ">Dashboard</h3>
        <p className="text-muted">Welcome Back, Rankers</p>
      </div>

      {/* INFO BOX */}
      <div className="text-center my-4 px-2 fade-slide">
        <div className="info-box info-custom bg-body p-3">
          <h5 className="fw-bold">
            Rankers QS for Jee and Neet (DPhil) by Us, 2025–26
          </h5>
          <small className="text-muted">
            Application deadline: 20 January 2026
          </small>
        </div>
      </div>

      {/* CARDS */}
      <div className="row my-4 px-2 fade-slide">
        {[
          {
            title: "Anatomy",
            code: "OXF/ENG/01",
            img: "/images/book.png",
            path: "/anatomy",
          },
          {
            title: "Biochemistry",
            code: "OXF/DIT/01",
            img: "/images/computer.png",
            path: "/biochemistry",
          },
          {
            title: "Physiology",
            code: "OXF/HND/01",
            img: "/images/degree.png",
            path: "/physiology",
          },
          {
            title: "Pharmacology",
            code: "OXF/ENG/01",
            img: "/images/book.png",
            path: "/pharmacology",
          },
          {
            title: "Microbiology",
            code: "OXF/DIT/01",
            img: "/images/computer.png",
            path: "/microbiology",
          },
          {
            title: "ENT",
            code: "OXF/HND/01",
            img: "/images/degree.png",
            path: "/ent",
          },
          {
            title: "Previous Questions",
            code: "OXF/HND/01",
            img: "/images/degree.png",
            path: "/previous-questions",
          },
        ].map((item, i) => (
          <div className="col-md-6 col-sm-6 col-12 mb-3 fade-slide" key={i}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="position-relative custom-card p-3 d-flex align-items-center">
                {/* Floating Image */}
                <img
                  src="src/assets/rankers.jpg"
                  alt="icon"
                  className="floating-icon border rounded-circle mx-3"
                  height="40px"
                  width="40px"
                />

                {/* Text Section */}
                <div className="ms-5">
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <small className="text-muted">{item.code}</small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
