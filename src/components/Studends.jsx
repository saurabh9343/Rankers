import React, { useEffect, useRef } from "react";
import "./Login.css";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "IIT Aspirant",
    photo: "https://i.pravatar.cc/300?img=12",
    review: "Rankers platform ne meri preparation ko bhot effective bana diya hai.",
    stats: "AIR 452",
  },
  {
    name: "Priya Singh",
    role: "Medical Student",
    photo: "https://i.pravatar.cc/300?img=32",
    review: "The teachers here are exceptional. Best decision for my career!",
    stats: "NEET Qualified",
  },
  {
    name: "Aman Verma",
    role: "JEE Advanced",
    photo: "https://i.pravatar.cc/300?img=45",
    review: "Mock tests level is exactly like the real exams. Brilliant analysis.",
    stats: "99.8 Percentile",
  },
  {
    name: "Sneha Patel",
    role: "Future Doctor",
    photo: "https://i.pravatar.cc/300?img=24",
    review: "Very affordable and high-quality content. Thank you Rankers!",
    stats: "Top Scorer",
  },
];

function Students() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect(); // cleanup
  }, []);

  return (
    <section className="students-section position-relative overflow-hidden mt-5">
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container py-5">
        {/* Header */}
        <div
          className="text-center mb-5 reveal-element"
          ref={(el) => (revealRefs.current[0] = el)}
        >
          <span className="badge rounded-pill bg-warning text-dark mb-2 px-3 py-2 fw-bold">
            WALL OF FAME
          </span>

          <h2 className="display-4 fw-black text-white mb-2">
            Our <span className="gradient-text-gold">Success</span> Stories
          </h2>

          <p className="text-white-50 lead mx-auto" style={{ maxWidth: 600 }}>
            Real results from real students. Your journey to the top starts here.
          </p>

          <div className="custom-hr mx-auto"></div>
        </div>

        {/* Cards */}
        <div className="row g-4 scroll-container pb-4">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="col-12 col-md-6 col-lg-3 reveal-element"
              ref={(el) => (revealRefs.current[i + 1] = el)}
            >
              <div className="modern-review-card">
                <div className="card-inner">
                  {/* Front */}
                  <div className="card-front">
                    <img src={r.photo} alt={r.name} className="student-img" />
                    <div className="front-info">
                      <h5 className="mb-0 fw-bold">{r.name}</h5>
                      <span className="badge bg-blur">{r.stats}</span>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="card-back p-4 d-flex flex-column justify-content-center align-items-center text-center">
                    <i className="bi bi-quote fs-1 mb-3"></i>

                    <p className="review-para mb-4 text-white-50 fst-italic">
                      "{r.review}"
                    </p>

                    <h6 className="fw-bold mb-0 text-warning">{r.name}</h6>
                    <small className="text-white-50">{r.role}</small>

                    <div className="rating-stars mt-3">
                      {[...Array(5)].map((_, idx) => (
                        <i key={idx} className="bi bi-star-fill text-warning"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Students;

