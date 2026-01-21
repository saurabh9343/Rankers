import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

const Images = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid dashboard-container">
      <button
        onClick={() => navigate(-1)}
        className="backbtn m-3"
        style={{ borderRadius: "8px" }}
      >
        ← Back
      </button>

      <div className="row">
        <div className="card col-md-4 col-sm-6 col-12 m-5">
          {/* 👉 Image Added Here */}
          <img
            src="src\assets\rankers.jpg" // <-- replace with your image path
            alt="Upper Limb"
            className="card-img-top"
            style={{  
              borderRadius: "10px",
              height: "200px",
              objectFit: "cover",
            }}
          />
          <button
            className="card-button"
            onClick={() => navigate("/anatomy/discription")}
          >
            Description
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Images;
