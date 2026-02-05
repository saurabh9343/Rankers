import React from "react";

const blogData = [
  { img: "images/image_1.jpg", day: "12", yr: "2019", mos: "april" },
  { img: "images/image_2.jpg", day: "12", yr: "2019", mos: "april" },
  { img: "images/image_3.jpg", day: "12", yr: "2019", mos: "april" },
  { img: "images/image_4.jpg", day: "12", yr: "2019", mos: "april" },
  { img: "images/image_5.jpg", day: "12", yr: "2019", mos: "april" },
  { img: "images/image_1.jpg", day: "12", yr: "2019", mos: "april" },
];

const BlogSection = () => {
  return (
    <section className="ftco-section bg-light" id="blog-section">
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center ">
            <h2 className="mb-4">Our Blog</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="row d-flex">
          {blogData.map((item, index) => (
            <div key={index} className="col-md-6 col-lg-4 d-flex ">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></a>

                <div className="text float-right d-block">
                  <div className="d-flex align-items-center pt-2 mb-4 topp">
                    <div className="one mr-2">
                      <span className="day">{item.day}</span>
                    </div>
                    <div className="two">
                      <span className="yr">{item.yr}</span>
                      <span className="mos">{item.mos}</span>
                    </div>
                  </div>

                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>

                  <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia.
                  </p>

                  <div className="d-flex align-items-center mt-4 meta">
                    <p className="mb-0">
                      <a href="#" className="btn btn-primary">
                        Read More <span className="ion-ios-arrow-round-forward"></span>
                      </a>
                    </p>

                    <p className="ml-auto mb-0">
                      <a href="#" className="mr-2">Admin</a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat"></span> 3
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
