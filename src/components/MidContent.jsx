import React from "react";

const MidContent = () => {
  return (
    <section
      className="ftco-intro img"
      id="about-section"
      style={{
        backgroundImage: "url('images/bg_1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height : "400px",
        position: "relative",
      }}
    >
      <div className="overlay"></div>

      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center text-white">
            <h2 className="fw-bold">Boost Your NEET & JEE Preparation</h2>

            <p className="mb-0">
              <a href="#" className="btn btn-light px-4 py-3 fw-semibold">
                Start Learning Now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidContent;
