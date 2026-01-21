import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

const Anatomy = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid dashboard-container">
     <button 
        onClick={() => navigate(-1)}
        className="backbtn  m-3"
        style={{ borderRadius: "8px" }}
      >
        ← Back
      </button>

      {/* INFO BOX */}
      <div className="text-center my-4 px-2 fade-slide">
        <div className="info-box Ana-custom bg-body p-3">
          <h5 className="fw-bold">Anatomy Complete Study Material</h5>
          <small className="text-muted">
            Updated Syllabus • Diagrams • MCQs • Previous Year Questions
          </small>
        </div>
      </div>

      {/* ANATOMY CHAPTERS */}
      <div className="row my-4 px-2">
        {[
          {
            title: "Upper Limb Anatomy",
            code: "ANAT/UL/01",
            img: "/images/book.png",
            path: "/anatomy/upper-limb",
          },
          {
            title: "Lower Limb Anatomy",
            code: "ANAT/LL/02",
            img: "/images/book.png",
            path: "/anatomy/lower-limb",
          },
          {
            title: "Thorax",
            code: "ANAT/TH/03",
            img: "/images/degree.png",
            path: "/anatomy/thorax",
          },
          {
            title: "Abdomen & Pelvis",
            code: "ANAT/AP/04",
            img: "/images/degree.png",
            path: "/anatomy/abdomen",
          },
          {
            title: "Head & Neck",
            code: "ANAT/HN/05",
            img: "/images/computer.png",
            path: "/anatomy/head-neck",
          },
          {
            title: "Neuroanatomy",
            code: "ANAT/NEURO/06",
            img: "/images/computer.png",
            path: "/anatomy/neuro",
          },
          {
            title: "Histology",
            code: "ANAT/HST/07",
            img: "/images/book.png",
            path: "/anatomy/histology",
          },
        ].map((item, i) => (
          <div className="col-md-6 col-sm-6 col-12 mb-3" key={i}>
            <Link
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="position-relative Ana-card p-3 d-flex align-items-center">
                {/* Icon */}
                <img
                  src="src/assets/rankers.jpg"
                  alt="icon"
                  className="floating-icon border rounded-circle mx-3"
                  height="40px"
                  width="40px"
                />

                {/* Text */}
                <div className="ms-4">
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
};

export default Anatomy;
