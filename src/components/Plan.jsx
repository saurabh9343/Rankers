import React from "react";
import "./Login.css";
import marrowLogo from "../assets/Marrow.png";

const Plan = () => {

  // ===== ARRAY DATA =====
  const plans = [
    {
      id: 1,
      title: "Plan 1",
      price: "Free",
      description: "Perfect for beginners starting their journey.",
      features: [
        "Basic Access",
        "Limited features",
        "Good for testing"
      ]
    },
    {
      id: 2,
      title: "Plan 2",
      price: "₹ 299 / Month",
      description: "Best for students who want more detailed content.",
      features: [
        "Full video access",
        "Practice questions",
        "Doubt support"
      ]
    },
    {
      id: 3,
      title: "Plan 3",
      price: "₹ 599 / Month",
      description: "Premium access for advanced learners.",
      features: [
        "Unlimited access",
        "Premium notes",
        "24/7 Mentor support"
      ]
    }
  ];

  return (
    <>
      {/* TOP LOGO + TITLE */}
      <div className="container text-center ">
        <img
          src={marrowLogo}
          alt="logo"
          style={{ height: "130px", width: "130px" }}
        />
        <h3 className="fw-bold mt-3">|| Welcome to Ranker App ||</h3>
        <h5 className="text-muted">Buy your plan and continue learning</h5>
      </div>

      {/* MAIN SECTION */}
      <div className="container mt-5">
        <div className="row g-4">

          {/* ===== DYNAMIC CARDS USING MAP ===== */}
          {plans.map((plan, index) => (
            <div key={plan.id} className="col-md-4 col-sm-6 col-12 mt-4">
              <div
                className="card shadow-lg border-0 rounded-4 h-100 p-4"
                style={{ background: "#ffffff", color: "#000" }}
              >
                <div className="card-details">
                  <p className="text-title fw-bold mb-2">{plan.title}</p>

                  <span
                    className="badge text-white p-2 mb-3 fs-6"
                    style={{
                      backgroundColor: "#3a6283ff",
                      borderRadius: "15px"
                    }}
                  >
                    {plan.price}
                  </span>

                  <p className="text-body">{plan.description}</p>

                  <ul className="list-unstyled mt-3">
                    {plan.features.map((item, i) => (
                      <li key={i} className="mb-2">✔ {item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  className="btn w-100 mt-auto fw-bold text-white"
                  style={{ backgroundColor: "#3a6283ff" }}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
};

export default Plan;
