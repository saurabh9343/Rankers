import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

const Images = () => {
  const navigate = useNavigate();

  const description = `
The upper limb is one of the most important and functionally versatile regions of the human body. It is designed to perform a wide range of movements that allow humans to interact with their environment, perform complex tasks, and carry out activities requiring both strength and precision. The upper limb is divided into major regions: the shoulder, arm, forearm, wrist, and hand, each contributing uniquely to everyday function.

The shoulder 
Overall, the upper limb is a remarkable combination of mobility, stability, and fine motor control. Its structure enables humans to perform daily tasks efficiently and adapt to countless physical demands.
`;

  return (
    <div className="container-fluid dashboard-container">
      {/* BACK BUTTON */}
      <button onClick={() => navigate(-1)} className="btn btn-primary m-3">
        ← Back
      </button>

      {/* MAIN ROW */}
      <div className="row justify-content-center align-items-center mb-4">
        {/* LEFT COLUMN – IMAGE */}
        <div className="col-md-4 col-sm-12">
          <img
            src="\src\assets\rankers.jpg"
            alt="Anatomy"
            className="img-fluid rounded shadow"
            style={{ width: "100%", height: "350px", objectFit: "cover" }}
          />
        </div>

        {/* RIGHT COLUMN – DESCRIPTION */}
        <div className="col-md-4 col-sm-12 mt-3 mt-md-0">
          <h2 className="fw-bold mb-3">Upper Limb Anatomy</h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              textAlign: "justify",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* EXTRA CONTENT SECTION BELOW */}
      <div className="row justify-content-center">
        <div className="col-md-10 col-sm-12 p-4 bg-light rounded shadow">
          <h3 className="fw-bold mb-3">Additional Anatomy Information</h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              textAlign: "justify",
            }}
          >
            The upper limb also contains a complex network of arteries, veins,
            and nerves that support functional movement and sensory feedback.
            The brachial plexus plays a crucial role in supplying motor and
            sensory innervation to the entire limb. Understanding the structure
            and biomechanics of the upper limb is essential for medical
            students, physiotherapists, and anyone studying human anatomy.
            Clinical conditions such as fractures, nerve injuries, rotator cuff
            tears, and carpal tunnel syndrome often involve parts of the upper
            limb, making this knowledge extremely important.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Images;
