import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const team = [
    { img: "images/team-1.jpg", name: "James Stallon", list: "10 Properties" },
    { img: "images/team-2.jpg", name: "Mike Johnson", list: "12 Properties" },
    { img: "images/team-3.jpg", name: "Sarah Wilson", list: "8 Properties" },
    { img: "images/team-4.jpg", name: "David Warner", list: "15 Properties" },
    { img: "images/team-3.jpg", name: "Sarah Wilson", list: "8 Properties" },
    { img: "images/team-4.jpg", name: "David Warner", list: "15 Properties" },
  ];

  return (
    <section className="ftco-section ftco-agent" id="agent-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center">
            <h2 className="mb-4">Our Teachers</h2>
          </div>
        </div>

        <Slider {...settings}>
          {team.map((t, i) => (
            <div key={i} className="item px-3">
              <div className="agent">
                <div className="img">
                  <img src={t.img} className="img-fluid" alt={t.name} />
                  <div>
                    <h3>I'm an agent</h3>
                  </div>
                </div>

                <div className="desc pt-3">
                  <h3>
                    <a href="#">{t.name}</a>
                  </h3>
                  <p className="h-info">
                    <span className="location">Listing</span>{" "}
                    <span className="details">— {t.list}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurTeam;
