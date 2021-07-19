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
        <SliderContent
          url={
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
        />
        <SliderContent
          url={
            "https://images.unsplash.com/photo-1525905708812-b271b5e3b2f3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1101&q=80"
          }
        />
        <SliderContent
          url={
            "https://images.unsplash.com/photo-1570213489059-0aac6626cade?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
        />
        <SliderContent course={"res"} />
      </Slider>
    </div>
  );
};

const SliderContent = ({ url }) => {
  return (
    <div>
      <Card className="p-3 rounded m-3">
        <div
          style={{
            height: "200px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${url})`,
          }}
        ></div>

        <Card.Body>
          <Card.Title as="h6">
            <strong> Adventure High Ropes</strong>
          </Card.Title>
          <Card.Text as="p">Find great places to stay, eat</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReactSlider;
