import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userFetchCourses } from "../redux/reaction/action";
import "./user.css";

function Courses() {
  const dispatch = useDispatch();
  const { courses = [], loading } = useSelector((state) => state.userCourses);

 useEffect(() => {
  dispatch(userFetchCourses());
}, [dispatch]);

useEffect(() => {
  if (loading) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll(".animate-hidden")
    .forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, [loading]);


  return (
    <div className="learning-wrapper py-5">
      <div className="content-holder text-center">

        <div className="animate-hidden spacing-large">
          <img
            src="src\assets\images\shourbh.png"
            alt="logo"
            className="mentor-avatar spacing-small"
          />
          <h2 className="heading-bold">
            Level Up With Our <span className="highlight-text">Premium Plans</span>
          </h2>
          <p className="subtitle-muted">
            Choose the best path for your learning journey
          </p>
        </div>

        <div className="row gap-layout justify-content-center">
          {loading ? (
            <div className="spinner-border text-primary my-5"></div>
          ) : (
            courses.map((course) => (
              <div key={course.id} className="col-12 col-md-6 col-lg-4">
                <div className="plan-card animate-hidden full-height padding-box">
                  
                  <div className="price-badge">
                    ₹{course.offer || course.price}
                  </div>

                  <h4 className="plan-title spacing-top">
                    {course.plan}
                  </h4>

                  <p className="plan-desc spacing-bottom">
                    {course.description ||
                      "Expert-led sessions with hands-on projects."}
                  </p>

                  <ul className="feature-list spacing-bottom flex-grow-1 text-start">
                    {[course.subject, course.duration, course.faculties]
                      .map(
                        (item, index) =>
                          item && (
                            <li key={index} className="feature-item">
                              <i className="bi bi-check2-circle icon-accent"></i>
                              {item}
                            </li>
                          )
                      )}
                  </ul>

                  <Link
                    to=""
                    className="action-btn btn btn-primary w-100 rounded-3"
                  >
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default Courses;
