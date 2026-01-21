import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./user.css";

const AnatomyChild = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid dashboard-container">
      <button 
        onClick={() => navigate(-1)}
        className="backbtn  m-3"
        style={{ borderRadius: "8px" }}
      >
        ← Back
      </button>
      <div className="card col-md-6 col-sm-6 col-12 mt-5 ">
        <div className="card-details">
          <p className="text-title">Uper-Limb</p>
          <p className="text-body">20 Multiple Questions this series</p>
        </div>
        <button className="card-button" onClick={()=>navigate("/anatomy/text")}>Start Now</button>
      </div>
    </div>
  );
};

export default AnatomyChild;
