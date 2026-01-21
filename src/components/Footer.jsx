import React, { useEffect, useRef, useState } from "react";
import "./Login.css";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`unique-footer ${isVisible ? "animate-in" : ""} mt-5`}
    >
      <div className="footer-orb orb-1"></div>
      <div className="footer-orb orb-2"></div>

      <div className="footer-wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
               82.39-16.72,168.19-17.73,250.45-.39C823.78,31,
               906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,
               214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>

      <div className="container position-relative py-5">
        <div className="row g-5 align-items-center">
          {/* LEFT */}
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <div className="brand-glow mb-4">
              <h2 className="footer-logo fw-black">
                RANKERS<span>.</span>
              </h2>
            </div>

            <h3 className="text-white fw-bold mb-3">
              Let's build something{" "}
              <span className="text-gradient">legendary</span> together.
            </h3>

            <p className="text-white-50 mb-4 pe-lg-5">
              Experience a new era of learning with Rankers. High-quality
              courses, expert mentors, and a community that grows with you.
            </p>

            <div className="social-links-wrapper d-flex justify-content-center justify-content-lg-start gap-3">
              {[
                "facebook",
                "twitter-x",
                "instagram",
                "linkedin",
                "youtube",
                "github",
                "whatsapp",
                "telegram",
              ].map((icon) => (
                <div key={icon} className="social-orb">
                  <i className={`bi bi-${icon}`}></i>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-lg-7">
            <div className="glass-form-card shadow-2xl">
              <div className="form-header mb-4">
                <h4 className="text-white fw-bold">Get In Touch</h4>
                <div className="accent-line"></div>
              </div>

              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <div className="input-group-modern">
                    <input type="text" required />
                    <label>Full Name</label>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="input-group-modern">
                    <input type="email" required />
                    <label>Email Address</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-group-modern">
                    <textarea rows="3" required></textarea>
                    <label>Your Message</label>
                  </div>
                </div>

                <div className="col-12 mt-4">
                  <button className="btn-modern-submit w-100">
                    <span>SEND MESSAGE</span>
                    <i className="bi bi-arrow-right-short ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-section mt-5 py-4">
        <div className="container text-center">
          <p className="mb-0 text-white-50">
            © 2026 <span className="text-white fw-bold">Rankers</span>. Crafted
            with <i className="bi bi-heart-fill text-danger mx-1"></i> by
            TechTeam
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
