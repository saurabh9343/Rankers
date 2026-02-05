import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const AnatomyChild = () => {
  const navigate = useNavigate();

  const quizConfig = {
    title: "Upper Limb",
    questions: 20,
    duration: "15 min",
    marking: "+4 / -1",
    startPath: "/anatomy/text"
  };

  return (
    <div className="quiz-page-wrapper">
      <div className="soft-glow"></div>
      <div className="container py-4 position-relative">
        <div className="d-flex align-items-center mb-5 fade-in">
          <button onClick={() => navigate(-1)} className="back-circle-btn">
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="ms-3">
            <h5 className="fw-bold text-dark mb-0">{quizConfig.title} Series</h5>
            <p className="text-muted small mb-0">Topic-wise Question Bank</p>
          </div>
        </div>

        <div className="row justify-content-center mt-5 fade-in">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="modern-quiz-card shadow-lg">
              <div className="card-top-line"></div>
              <div className="p-4 p-md-5 text-center">
                <div className="icon-badge mb-4">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                
                <h2 className="fw-800 text-dark mb-2">{quizConfig.title}</h2>
                <p className="text-muted mb-4 small">Ready to test your knowledge? This session contains high-yield questions.</p>

                <div className="quiz-stats-row mb-5">
                  <div className="stat-item">
                    <span className="d-block fw-bold">{quizConfig.questions}</span>
                    <small>Items</small>
                  </div>
                  <div className="stat-sep"></div>
                  <div className="stat-item">
                    <span className="d-block fw-bold">{quizConfig.duration}</span>
                    <small>Time</small>
                  </div>
                  <div className="stat-sep"></div>
                  <div className="stat-item">
                    <span className="d-block fw-bold">{quizConfig.marking}</span>
                    <small>Score</small>
                  </div>
                </div>

                <button 
                  className="btn-start-quiz shadow-primary" 
                  onClick={() => navigate(quizConfig.startPath)}
                >
                  Start Quiz
                  <i className="bi bi-chevron-right ms-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomyChild;