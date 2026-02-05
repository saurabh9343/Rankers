import React from "react";
import { Link } from "react-router-dom";

const Anatomy = () => {
  return (
    <>
    <h3>Anatomy Topics</h3>
      <div
        style={{
          display : "flex",
          width: "300px",
          margin: "50px auto",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#f3f7ff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "20px" }}>Content</h3>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/images"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              📷 Images
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link
              to="/textseries"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              📚 Text Series
            </Link>
          </li>

          <li>
            <Link
              to="/videos"
              style={{ textDecoration: "none", fontSize: "18px" }}
            >
              🎥 Videos
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Anatomy;
