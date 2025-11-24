import React from "react";
import ranker from "../assets/rankers.jpg";

function Footer() {
  return (
    <>
      <footer
        style={{
          background: "#1d1f1d",
          color: "#fff",
          padding: "50px 0 20px",
        }}
      >
        <div className="container-fluid mt-4">
          {/* 3 Column Section */}
          <div
            className="row text-md-start text-start"
            style={{
              border: "2px solid #ffffff40",
              borderRadius: "15px",
              padding: "25px 15px",
              backdropFilter: "blur(3px)",
            }}
          >
            {/* 1️⃣ Quick Links */}
            <div
              className="col-md-4 mb-4"
              style={{
                borderRight: "2px solid #ffffff40",
              }}
            >
              <h6 className="fw-bold text-white mb-3">Quick Links</h6>

              <div className="d-flex flex-column align-items-start">
                <img
                  src={ranker}
                  alt="Marrow Logo"
                  style={{
                    width: "110px",
                    height: "65px",
                    borderRadius: "10px",
                    border: "2px solid white",
                    padding: "3px",
                  }}
                />

                <h5 className="fw-bold mt-3 text-white">Pharmasis-App</h5>

                <p style={{ fontSize: "15px", color: "#e4e4e4" }}>
                  Pharmasis-App is a modern learning platform designed for
                  Pharmacy, NEET, and JEE aspirants offering notes, quizzes, and
                  expert guidance.
                </p>

                <p style={{ fontSize: "14px", color: "#e4e4e4" }}>
                  Thousands of learners trust us to build their future in the
                  medical & engineering field.
                </p>
              </div>
            </div>

            {/* 2️⃣ Courses */}
            <div
              className="col-md-4 mb-4"
              style={{
                borderRight: "2px solid #ffffff40",
              }}
            >
              <h6 className="fw-bold text-white mb-3">
                📘 Explore Our Courses
              </h6>

              <ul className="list-unstyled" style={{ color: "#e4e4e4" }}>
                <li className="mb-2">
                  <strong>JEE (Engineering):</strong> PYQs, mock tests & physics
                  sets.
                </li>
                <li className="mb-2">
                  <strong>NEET (Medical):</strong> Bio, Physics, Chemistry with
                  examples.
                </li>
                <li className="mb-2">
                  <strong>Pharmacy:</strong> Diploma & Degree notes + mock
                  exams.
                </li>
                <li>
                  <strong>Career Guidance:</strong> Competitive exams &
                  scholarships updates.
                </li>
              </ul>
            </div>

            {/* 3️⃣ Contact / About */}
            <div className="col-md-4 mb-4">
              <h6 className="fw-bold text-white mb-3">About Us</h6>
              <p style={{ fontSize: "14px", color: "#e4e4e4" }}>
                We simplify learning for Indian students with engaging,
                accessible and affordable education tools.
              </p>

              <h6 className="fw-bold text-white mb-2">Contact</h6>
              <p style={{ fontSize: "14px", color: "#e4e4e4" }}>
                📍 Indore, Madhya Pradesh <br />
                📧 devQsoft@gmail.com <br />
                ☎️ +91 93434418980
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p
            className="text-center mt-3 mb-0"
            style={{ fontSize: "14px", color: "#ccc" }}
          >
            © {new Date().getFullYear()} Pharmasis-App. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
