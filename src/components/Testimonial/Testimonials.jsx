import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Highly Efficient Learning
                      </h6>
                      <p>
                      I am amazed by how quickly I could learn and apply new skills through this website. The courses are structured to maximize efficiency and engagement, and I found myself progressing rapidly. The 24/7 support is a game-changer; I never felt alone on my learning journey.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">John D</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                       Unwavering Support
                      </h6>
                      <p>
                        From day one, this website has offered unwavering support, making my learning experience exceptional. The availability of round-the-clock assistance ensures that help is just a click away. Interacting with the vibrant community and dedicated instructors has been invaluable in my growth as a learner.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sarah K</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Valuable Certifications
                      </h6>
                      <p>
                        The certifications I earned through this platform have been invaluable in propelling my career forward. The courses are of high quality, and the content is both enriching and practical. Having lifetime access to the course materials has proven to be a tremendous resource for continuous improvement.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Michael P</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
