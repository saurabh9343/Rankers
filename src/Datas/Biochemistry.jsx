import React from "react";
import { Link } from "react-router-dom";
import Glycolysis from "../assets/images/Glycolysis.jpeg";

function Biochemistry() {
  const topics = [
    {
      id: 1,
      title: "Glycolysis and gluconeogenesis",
      rating: 4.5,
      img: Glycolysis,
      mcqs: 30,
    },
    {
      id: 2,
      title: "ETC and bioenergetics",
      rating: 4.5,
      img: Glycolysis,
      mcqs: 18,
    },
    { id: 3, title: "Krebs Cycle", rating: 4.5, img: Glycolysis, mcqs: 18 },
    {
      id: 4,
      title: "HMP shunt pathway, Fructose",
      rating: 4.5,
      img: Glycolysis,
      mcqs: 15,
    },
  ];

  return (
    <>
      <h1 className="head text-center mt-5">Biochemistry Topic...</h1>
      <h5
        className="para text-center mt-5"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
      >
        CARBOHYDRATES
      </h5>

      {topics.map((topic, index) => (
        <Link
          to={`/topic/${topic.id}`}
          key={topic.id}
          className="text-decoration-none text-dark"
        >
          <div className="card col-11 col-sm-10 col-md-10 mx-auto mt-3 shadow border border-gradient rounded-3 p-3 bg-light position-relative m-3 m-md-5 mt-2 ">
            <div
              className="position-absolute d-flex justify-content-center align-items-center"
              style={{
                left: "-25px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "35px",
                height: "35px",
                borderRadius: "50%",
                backgroundColor: "#111011ff",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {index + 1}
            </div>

            <div className="row g-3 align-items-center flex-column flex-md-row text-center text-md-start">
              <div className="col-md-3 col-12">
                <img
                  src={topic.img}
                  alt={topic.title}
                  className="img-fluid rounded-start"
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "1px",
                  }}
                />
              </div>

              <div className="col-md-9 col-12 mt-3 mt-md-0">
                <div className="card-body">
                  <h4 className="card-title mb-3 mb-md-5">{topic.title}</h4>
                  <p className="card-text mb-0">
                    {" "}
                    ⭐ {topic.rating} &nbsp; &nbsp; | {topic.mcqs} MCQs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
} 

export default Biochemistry;
