import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientSay = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

 const reviews = [
  {
    name: "Rahul Sharma",
    role: "Student",
    review:
      "Ranker platform ने मेरी preparation को बहुत easy और effective बना दिया। Teachers की explanation और content दोनों high quality हैं!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Medical Aspirant",
    review:
      "Ranker platform ने मेरी preparation को बहुत easy और effective बना दिया। Teachers की explanation और content दोनों high quality हैं!",
    rating: 5,
  },
  {
    name: "Aman Verma",
    role: "NEET Student",
    review:
      "Ranker platform ने मेरी preparation को बहुत easy और effective बना दिया। Teachers की explanation और content दोनों high quality हैं!",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "Aspirant",
    review:
      "Ranker platform ने मेरी preparation को बहुत easy और effective बना दिया। Teachers की explanation और content दोनों high quality हैं!",
    rating: 5,
  },
];


  return (
    <section className="ftco-section" id="client-section">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">What Our Students Say</h2>
            <p>For every stage of your journey as a medical student</p>
          </div>
        </div>

        <Slider {...settings}>
          {reviews.map((r, i) => (
            <div key={i} className="px-3">
              <div
                className="p-4 shadow rounded"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(6px)",
                  borderRadius: "15px",
                  minHeight: "200px",
                }}
              >
                <h4 className="mb-1">{r.name}</h4>
                <p className="text-muted mb-2">{r.role}</p>

                {/* Rating Stars */}
                <div className="mb-2" style={{ color: "#FFD700" }}>
                  {"★".repeat(r.rating)}{" "}
                  {"☆".repeat(5 - r.rating)}
                </div>

                <p className="text-dark">{r.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientSay;
