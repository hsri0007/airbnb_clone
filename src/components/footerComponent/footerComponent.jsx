import React from "react";
import "./footerComponent.css";
import { GrLocation } from "react-icons/gr";
import { IoIosCall } from "react-icons/io";
import { Row, Col, Container, Button } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="py-5 ">
      <Container fluid={"sm"}>
        <Row>
          <Col xs={12} md={3}>
            <h6>Contact US</h6>
            <Row>
              <Col xs={1}>
                <GrLocation style={{ fontSize: "20px" }} />
              </Col>
              <Col xs={10}>
                <p>
                  H no. 8-2-601/p/15, M S Heights,
                  <br /> Ground Floor, Road no. 10,
                  <br /> Banjara Hills, Hyderabad,
                  <br /> Telangana 500034
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <IoIosCall style={{ fontSize: "20px" }} />
              </Col>
              <Col xs={10}>
                <p>123 456 7890</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>
                <GrLocation style={{ fontSize: "20px" }} />
              </Col>
              <Col xs={10}>
                <p>support@gmail.com</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2}>
            <h6>Company</h6>
            <a href="/">Help Center</a>
            <a href="/">About</a>
            <a href="/">Careers</a>
            <a href="/">How It Works</a>
            <a href="/">Articles & Tips</a>
            <a href="/">Terms of Service</a>
          </Col>
          <Col xs={12} md={2}>
            <h6>Discover</h6>
            <a href="/">Chicago</a>
            <a href="/">Los Angeles</a>
            <a href="/">Miami</a>
            <a href="/">New York</a>
            <a href="/">Florida</a>
            <a href="/">Boston</a>
          </Col>
          <Col xs={12} md={2}>
            <h6>News Letter</h6>
            <p>We don't send spam so don't worry</p>
            <div className="input__bg__footer">
              <input type="text" placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
