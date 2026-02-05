import React from "react";
import "./user.css";
import { Link } from "react-router-dom";

const subjects = [
  {
    title: "Anatomy",
    code: "OXF/ENG/01",
    path: "/anatomy",
    icon: "bi-heart-pulse-fill",
    progress: 72,
    gradient: "linear-gradient(135deg,#6366f1,#4f46e5)"
  },
  {
    title: "Biochemistry",
    code: "OXF/DIT/01",
    path: "/biochemistry",
    icon: "bi-droplet-fill",
    progress: 55,
    gradient: "linear-gradient(135deg,#ec4899,#db2777)"
  },
  {
    title: "Physiology",
    code: "OXF/HND/01",
    path: "/physiology",
    icon: "bi-activity",
    progress: 68,
    gradient: "linear-gradient(135deg,#f59e0b,#d97706)"
  },
  {
    title: "Pharmacology",
    code: "OXF/ENG/01",
    path: "/pharmacology",
    icon: "bi-capsule-pill",
    progress: 40,
    gradient: "linear-gradient(135deg,#10b981,#059669)"
  },
  {
    title: "Microbiology",
    code: "OXF/DIT/01",
    path: "/microbiology",
    icon: "bi-bug-fill",
    progress: 82,
    gradient: "linear-gradient(135deg,#3b82f6,#2563eb)"
  },
  {
    title: "ENT",
    code: "OXF/HND/01",
    path: "/ent",
    icon: "bi-ear-fill",
    progress: 60,
    gradient: "linear-gradient(135deg,#8b5cf6,#7c3aed)"
  }
];

function AdminDashboard() {
  return (
    <div className="container-fluid dashboard-wrapper py-4 px-3 px-md-5">

      <div className="mb-5">
        <h2 className="fw-900 display-6">Dashboard</h2>
        <p className="text-muted">
          Welcome back, <strong>Rankers Team</strong> 👋
        </p>
      </div>

      <div className="info-glass-card p-4 mb-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="info-icon-box me-3">
            <i className="bi bi-megaphone-fill"></i>
          </div>
          <div>
            <h6 className="fw-800 mb-1">Rankers QS 2025–26</h6>
            <small className="text-muted">JEE & NEET Applications Open</small>
          </div>
        </div>
        <div className="deadline-box text-danger fw-800 mt-3 mt-md-0">
          Deadline: 20 Jan 2026
        </div>
      </div>

      <div className="row g-4">
        {subjects.map((s, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={i}>
            <Link to={s.path} className="text-decoration-none">
              <div className="subject-card h-100">
                
                <div className="subject-icon" style={{ background: s.gradient }}>
                  <i className={`bi ${s.icon}`}></i>
                </div>

                <div className="subject-content">
                  <h6 className="fw-800 mb-1">{s.title}</h6>
                  <span className="code-pill">{s.code}</span>

                  <div className="progress mt-3">
                    <div
                      className="progress-bar"
                      style={{ width: `${s.progress}%` }}
                    />
                  </div>
                  <small className="text-muted">
                    Completion: {s.progress}%
                  </small>
                </div>

                <i className="bi bi-arrow-right subject-arrow"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./dashboard.css";

// function Dashboard() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const elements = document.querySelectorAll(".ud-fade");
//     const timer = setTimeout(() => {
//       elements.forEach((el, i) =>
//         setTimeout(() => el.classList.add("ud-visible"), i * 120)
//       );
//       setIsLoading(false);
//     }, 800);

//     return () => clearTimeout(timer);
//   }, []);

//   const user = {
//     name: "Harsh",
//     lastCourse: "English Proficiency",
//     lastLesson: "Advanced Grammar",
//   };

//   const courses = [
//     { title: "English Proficiency", progress: 72, color: "#6366f1" },
//     { title: "NEET Biology", progress: 45, color: "#10b981" },
//     { title: "JEE Physics", progress: 100, color: "#f59e0b" },
//   ];

//   if (isLoading) {
//     return (
//       <div className="ud-wrapper d-flex justify-content-center align-items-center">
//         <div className="ud-loader">
//           <span></span><span></span><span></span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid ud-wrapper px-4 py-4">

//       <div className="ud-fade mb-4">
//         <h2 className="fw-bold mb-1">Welcome back, {user.name} 👋</h2>
//         <p className="text-muted">Continue where you left off.</p>
//       </div>

//       {/* Resume Learning */}
//       <div className="ud-fade mb-5">
//         <div className="ud-resume-card p-4 rounded-4 text-white shadow-sm">
//           <h5 className="fw-bold">{user.lastCourse}</h5>
//           <p className="opacity-75 mb-3">
//             Last lesson: {user.lastLesson}
//           </p>
//           <button
//             className="btn btn-light fw-bold rounded-pill px-4"
//             onClick={() => navigate("/course/player")}
//           >
//             Resume Learning →
//           </button>
//         </div>
//       </div>

//       {/* Stats */}
//       <div className="row g-4 mb-5">
//         {[
//           { label: "Enrolled Courses", val: "3" },
//           { label: "Completed", val: "1" },
//           { label: "Certificates", val: "1" },
//         ].map((s, i) => (
//           <div className="col-md-4 ud-fade" key={i}>
//             <div className="ud-stat-card p-4 text-center shadow-sm">
//               <h3 className="fw-bold">{s.val}</h3>
//               <p className="text-muted mb-0">{s.label}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Courses */}
//       <div className="ud-fade mb-3">
//         <h4 className="fw-bold">My Courses</h4>
//       </div>

//       <div className="row g-4 mb-5">
//         {courses.map((c, i) => (
//           <div className="col-lg-4 ud-fade" key={i}>
//             <div className="ud-course-card p-4 shadow-sm h-100">
//               <h5 className="fw-bold">{c.title}</h5>

//               <div className="mb-3">
//                 <div className="d-flex justify-content-between mb-1">
//                   <span className="small fw-semibold">Progress</span>
//                   <span className="small fw-bold">{c.progress}%</span>
//                 </div>
//                 <div className="ud-progress">
//                   <div
//                     className="ud-progress-bar"
//                     style={{ width: `${c.progress}%`, background: c.color }}
//                   />
//                 </div>
//               </div>

//               <button
//                 className="btn btn-dark w-100 rounded-3"
//                 onClick={() => navigate("/course/player")}
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Certificate */}
//       <div className="ud-fade">
//         <h4 className="fw-bold mb-3">Certificates</h4>
//         <div className="ud-certificate-card p-4 text-center shadow-sm">
//           <p className="fw-semibold mb-2">
//             🎉 English Proficiency Certificate
//           </p>
//           <button className="btn btn-outline-success rounded-pill px-4">
//             Download
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Dashboard;
