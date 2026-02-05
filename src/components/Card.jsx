import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userFetchCourses } from "../redux/reaction/action";
import "./Login.css";

function Card() {
  const dispatch = useDispatch();
  const { courses = [], loading } = useSelector((state) => state.userCourses);

  useEffect(() => {
    dispatch(userFetchCourses());
  }, [dispatch]);

  return (
    <div id="courses" className="container-fluid py-5 bg-premium-light">
      <div className="container">
        <ScrollHeader />

        <div className="row justify-content-center g-4 mt-2">
          {loading ? (
            <div className="col-12 text-center py-5">
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-2 text-muted fw-bold">Loading Premium Plans...</p>
            </div>
          ) : (
            courses.map((course) => (
              <div
                key={course.id}
                className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
              >
                <ScrollCard plan={course} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

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
      className="text-center mb-5"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <img
        src="src/assets/images/shourbh.png"
        alt="logo"
        className="rounded-circle profile-img-top shadow-lg mb-4"
      />
      <h2 className="card-head fw-bold">
        BUY YOUR PLAN AND <span className="text-primary">CONTINUE LEARNING</span>
      </h2>
    </div>
  );
}

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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      className="plan-wrapper w-100"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <div className="plan-inner-card h-100">
        <div className="offer-tag-premium">
          ₹{plan.offer || plan.price} <small>/ m</small>
        </div>

        <div className="card-body-content p-4 pt-5">
          <h3 className="plan-title-text mt-2">{plan.plan || plan.title}</h3>
          <p className="plan-info-text text-muted mb-4">
            {plan.description || "Master industry-leading skills with our expert mentors."}
          </p>

          <ul className="plan-features-list list-unstyled mb-4">
            {[plan.subject, plan.duration, plan.faculties].map((feat, i) => (
              feat && (
                <li key={i} className="d-flex align-items-center mb-2">
                  <span className="check-icon-bg me-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                    </svg>
                  </span>
                  <span className="feat-text">{feat}</span>
                </li>
              )
            ))}
          </ul>

          <div className="mt-auto pt-3">
            <Link className="btn-enroll-premium w-100" to="/login">
              Choose Plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;  