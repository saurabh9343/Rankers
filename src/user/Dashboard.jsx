import React, { useEffect } from "react";
function AdminDashboard() {

  // Run animation on load
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-slide");
    elements.forEach((ele, i) => {
      setTimeout(() => {
        ele.classList.add("visible");
      }, i * 200);
    });
  }, []);

  return (
    <div className="container-fluid dashboard-container">

      {/* HEADING */}
      <div className="fade-slide">
        <h3 className="fw-bold mb-1">Dashboard</h3>
        <p className="text-muted">Welcome Back, Rankers</p>
      </div>

      {/* SCHOLARSHIP CARD */}
      <div className="text-center my-4 px-2 fade-slide">
        <div className="info-box shadow-lg">
          <h5 className="fw-bold">
            Oxford scholarships for PhD (DPhil) in Biology, 2023–24
          </h5>
          <small className="text-muted">Application deadline: 20 January 2023</small>
        </div>
      </div>

      {/* CARDS */}
      <div className="row mb-4">
        {[
          { title: "Diploma in English", code: "OXF/ENG/01" },
          { title: "Diploma in IT", code: "OXF/DIT/01" },
          { title: "HND in Computing", code: "OXF/HND/01" },
        ].map((item, i) => (
          <div className="col-md-4 col-sm-6 col-12 mb-3 fade-slide" key={i}>
            <div className="custom-card shadow">
              <h6 className="fw-bold">{item.title}</h6>
              <small className="text-muted">{item.code}</small>
            </div>
          </div>
        ))}
      </div>

      {/* PROGRESS SECTION */}
      <div className="card p-4 mb-4 shadow fade-slide progress-card">

        <p><strong>Module Progress:</strong> 90%</p>
        <div className="custom-progress">
          <div className="bar bg-primary" style={{ width: "90%" }}></div>
        </div>

        <p><strong>Assignment Progress:</strong> 10%</p>
        <div className="custom-progress">
          <div className="bar bg-danger" style={{ width: "10%" }}></div>
        </div>

        <p><strong>Attendance Progress:</strong> 97%</p>
        <div className="custom-progress">
          <div className="bar bg-success" style={{ width: "97%" }}></div>
        </div>

        <p><strong>Course Progress:</strong> 50%</p>
        <div className="custom-progress">
          <div className="bar bg-warning" style={{ width: "50%" }}></div>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
