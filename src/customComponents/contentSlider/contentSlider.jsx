import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "react-bootstrap";

const ReactSlider = () => {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <SliderContent course={"res"} />
        <SliderContent course={"res"} />
        <SliderContent course={"res"} />
        <SliderContent course={"res"} />
      </Slider>
    </div>
  );
};

const SliderContent = ({ course }) => {
  return (
    <div>
      <Card className="p-5 bg-light rounded m-3">
        <div className="d-flex justify-content-center align-items-center flex-column">
          <Card.Img
            variant="top"
            className="img-lg  rounded-circle "
            src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
            style={{ width: "50px", height: "50px" }}
          />
          <Card.Title as="h6">
            <strong> Alien Boy</strong>
          </Card.Title>
          <Card.Text as="p">Frontend Developer</Card.Text>
        </div>

        <Card.Body className="text-center text-muted">
          <Card.Text as="p">Find great places to stay, eat</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReactSlider;
