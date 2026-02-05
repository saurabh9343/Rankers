// import React from "react";
// import { Link } from "react-router-dom";

// function User() {
//   const subjects = [
//     {
//       title: "Anatomy",
//       icon: "🧠",
//       modules: "0/50 Modules",
//       path: "/faqs/anatomy",
//       color: "#f707b380",
//     },
//     {
//       title: "Biochemistry",
//       icon: "🧬",
//       modules: "0/67 Modules",
//       path: "/biochemistry",
//       color: "#e3f14b80",
//     },
//     {
//       title: "Physiology",
//       icon: "🩺",
//       modules: "0/55 Modules",
//       path: "/physiology",
//       color: "rgba(59, 7, 247, 0.5)",
//     },
//   ];

//   return (
//     <>
//       <h1
//         className="card-text text-center mt-4 text-body-secondary fw-light"
//         style={{
//           fontFamily: "'Times New Roman', serif",
//           color: "#1f1c1dff",
//           textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//         }}
//       >
//         Questions Queries..
//       </h1>

//       <div className="container">
//         {subjects.map((item, index) => (
//           <Link
//             key={index}
//             to={item.path}
//             className="text-decoration-none text-dark d-block"
//           >
//             <div className="card w-100 mx-auto mt-4 shadow border border-gradient rounded-3 p-3 ">
//               <div className="d-flex align-items-center flex-wrap">
//                 {/* 👉 Index Number (1,2,3...) */}
//                 <div className="me-3 fs-4 fw-bold"> 
//                   {index + 1}.
//                 </div>

//                 <div
//                   className="me-3 fs-1 m-2"
//                   style={{ textShadow: `1px 1px 8px ${item.color}` }}
//                 >
//                   {item.icon}
//                 </div>

//                 <div className="flex-grow-1 text-center text-black">
//                   <h4 className="card-title mb-3">{item.title}</h4>

//                   <input
//                     type="range"
//                     className="form-range mb-3"
//                     min="0"
//                     max="0"
//                     value="0"
//                     readOnly
//                   />

//                   <p className="card-text mb-0">{item.modules}</p>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// }

// export default User;
import React from 'react'

const FAQS = () => {
  return (
    <div style={{height : "400px"}}>FAQS</div>
  )
}

export default FAQS