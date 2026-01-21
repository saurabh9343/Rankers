import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const plans = [
  {
    id: 1,
    price: 49,
    title: "Professional",
    description:
      "This plan is for those who have a team already and running a large business.",
    features: ["20 team members", "Plan team meetings", "File sharing"],
  },
  {
    id: 2,
    price: 29,
    title: "Starter",
    description: "This plan is for small teams just getting started.",
    features: ["5 team members", "Plan team meetings", "File sharing"],
  },
  {
    id: 3,
    price: 99,
    title: "Enterprise",
    description: "For large businesses requiring advanced features.",
    features: ["50+ team members", "Plan team meetings", "File sharing"],
  },
];

function Card() {
  return (
    <div className="container py-5">
      {/* Logo + Heading */}
      <ScrollHeader />

      {/* Cards Container */}
      <div className="row justify-content-center g-4 mt-4">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
          >
            <ScrollCard plan={plan} />
          </div>
        ))}
      </div>
    </div>
  );
}

// Scroll animation for header
function ScrollHeader() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <img
        src="src\assets\images\shourbh.png"
        alt="logo"
        className="rounded-circle mx-auto"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          boxShadow: "11px 3px 1px rgba(5, 35, 185, 0.35)",
        }}
      />
      <h2 className="card-head fw-bold mt-4">
        BUY YOUR PLAN AND CONTINUE LEARNING
      </h2>
    </div>
  );
}

// Individual Card with scroll animation
function ScrollCard({ plan }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="plan w-100"
      style={{
        maxWidth: "300px",
        minHeight: "480px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <div className="inner d-flex flex-column justify-content-between h-100 p-3 position-relative">
        <span className="pricing">
          ${plan.price} <small>/ m</small>
        </span>
        <div>
          <p className="title">{plan.title}</p>
          <p className="info">{plan.description}</p>
        </div>
        <ul className="features list-unstyled ">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="d-flex align-items-center mb-2">
              <span className="icon d-flex align-items-center justify-content-center">
                <svg height="24" width="24" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                  ></path>
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="action mt-3 w-100">
          <Link className="button btn w-100" to="#">
            Choose plan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
