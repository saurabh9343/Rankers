import React from "react";

const Slidebar = () => {
  return (
    <section
      className="hero-wrap js-fullheight"
      style={{
        backgroundImage: "url('images/bg_1.jpg')",
        objectFit: "cover",
      }}
      data-section="home"
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>

      <div className="container">
        <div
          className="row no-gutters slider-text js-fullheight align-items-center justify-content-start"
          data-scrollax-parent="true"
        >
          <div
            className="col-md-5 "
            data-scrollax=" properties: { translateY: '70%' }"
          >
            <h1>Welcome to Rankers ||</h1>

            <p className="mb-5">
              Taken by over 1 lakh participants across India, the Test Series
              gives you a fair idea of where you stand in the actual
              competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slidebar;
