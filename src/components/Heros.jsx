import React from "react";

function Heros() {
  return (
    <div className="hero-section d-flex align-items-center justify-content-center">
     
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      <div className="container text-center content-wrapper">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <h5 className="text-warning fw-bold mb-3 text-uppercase letter-spacing fade-in-top">
              ✨ Language School
            </h5>
            
            <h1 className="text-white fw-bold display-3 main-title mb-2">
              Any Language
            </h1>
            <h1 className="text-white fw-bold display-3 main-title">
              You <span className="text-highlight">Want</span>
            </h1>

            <p className="text-light mt-4 mb-5 mx-auto lead hero-subtitle d-none d-sm-block">
              Master new cultures and open global opportunities with our 
              expert-led language courses.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-column flex-sm-row mt-4">
              <button className="hero-btn-primary px-5 py-3 shadow-lg">
                Explore Courses
              </button>
              <button className="hero-btn-outline px-5 py-3">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heros;