import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

const Anatomy = () => {
  const navigate = useNavigate();

  const chapters = [
    { title: "Upper Limb Anatomy", code: "ANAT/UL/01", icon: "bi-hand-index-thumb", color: "#6366f1", path: "/anatomy/upper-limb"},
    { title: "Lower Limb Anatomy", code: "ANAT/LL/02", icon: "bi-person-walking", color: "#ec4899" },
    { title: "Thorax", code: "ANAT/TH/03", icon: "bi-lungs", color: "#f59e0b" },
    { title: "Abdomen & Pelvis", code: "ANAT/AP/04", icon: "bi-shield-check", color: "#10b981" },
    { title: "Head & Neck", code: "ANAT/HN/05", icon: "bi-person-bounding-box", color: "#3b82f6" },
    { title: "Neuroanatomy", code: "ANAT/NEURO/06", icon: "bi-cpu", color: "#8b5cf6" },
    { title: "Histology", code: "ANAT/HST/07", icon: "bi-microscope", color: "#ef4444" },
  ];

  return (
    <div className="container-fluid py-4 px-3 px-md-5 dashboard-container">
   
      <div className="d-flex align-items-center mb-4">
        <button onClick={() => navigate('/dashboard')} className="ana-back-btn">
          <i className="bi bi-chevron-left"></i>
        </button>
        <div className="ms-3">
          <h5 className="fw-bold mb-0 text-dark">Anatomy MCQs</h5>
          <p className="text-muted x-small mb-0">Medical Excellence • 2026 Edition</p>
        </div>
      </div>

      <div className="row mb-5 px-2">
        <div className="col-12">
          <div className="ana-premium-banner">
            <div className="banner-content">
              <h2 className="fw-900 mb-2">Complete Study Material</h2>
              <p className="opacity-75 mb-0">
                Master Anatomy with high-definition diagrams, clinical correlations, and MCQ banks.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      <div className="row g-3 px-2">
        {chapters.map((item, i) => (
          <div className="col-12 col-md-6" key={i}>
            <Link to={item.path} className="text-decoration-none">
              <div className="ana-subject-card">
                <div className="ana-card-inner p-3 d-flex align-items-center">
                  <div className="ana-icon-wrapper" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>

                  <div className="ms-3 flex-grow-1">
                    <h6 className="fw-bold mb-0 text-dark">{item.title}</h6>
                    <span className="ana-code-text">{item.code}</span>
                  </div>

                  <div className="ana-arrow-box">
                    <i className="bi bi-arrow-right-short"></i>
                  </div>
                </div>
              
                <div className="card-accent-bar" style={{ backgroundColor: item.color }}></div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anatomy;