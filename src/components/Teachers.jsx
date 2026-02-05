import React, { useState, useEffect, useRef } from "react";
import "./Login.css";

function Teachers() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPair, setCurrentPair] = useState(0);

  const imagePairs = [
    ["src/assets/images/teacher2.jpg", "src/assets/images/teacher3.jpg"],
    ["src/assets/images/teacher4.jpg", "src/assets/images/teacher1.jpg"],
  ];

  /* Intersection Observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* Image rotation */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % imagePairs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagePairs.length]);

  const [mainImg, secondaryImg] = imagePairs[currentPair];

  return (
    <section
      ref={sectionRef}
      className={`container py-5 mt-5 teacher-section ${
        isVisible ? "fade-in-up" : "hidden-section"
      }`}
    >
      <div className="row align-items-center g-5">
        {/* LEFT CONTENT */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h5 className="text-uppercase ls-2 fw-bold text-gold">
            Professional Mentors
          </h5>

          <h1 className="display-5 fw-bold mb-3 main-heading">
            High Quality <br />
            <span className="text-dark-emphasis">Education for You</span>
          </h1>

          <p className="text-muted lead mb-4 pe-md-5">
            Our expert teachers provide a supportive environment to help you
            master any language with confidence and ease.
          </p>

          <button className="btn btn-teacher-premium px-5 py-3 fw-bold">
            Make Appointment
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="col-12 col-md-6 mt-5 mt-md-0">
          <div className="teacher-img-wrapper position-relative mx-auto">
            <div className="main-img-box shadow-lg">
              <img
                key={`main-${currentPair}`}
                src={mainImg}
                alt="Main Teacher"
                className="img-fluid animate-img"
              />
            </div>

            <div className="secondary-img-box shadow">
              <img
                key={`secondary-${currentPair}`}
                src={secondaryImg}
                alt="Secondary Teacher"
                className="img-fluid animate-img"
              />
            </div>

            <div className="deco-dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
