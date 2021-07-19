import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ReactSlider from "../../../customComponents/reactSlider/reactSlider";
import ContentSlider from "../../../customComponents/contentSlider/contentSlider";
import "./contentComponent.css";

const ContentComponent = () => {
  return (
    <div className="pt-5 mt-5">
      <div className="mt-5 mb-8">
        <Container fluid="sm" className="text-center">
          <h3>Best Deals In Your City</h3>
          <p className="text-muted">
            Find great places to stay, eat, shop or visit from local experts.
          </p>
        </Container>
        <Container fluid="sm">
          <ReactSlider />
        </Container>
      </div>
      <div className="mt-5">
        <Container fluid="xs" className="text-center">
          <h3>Trending Cities</h3>
          <p className="text-muted">Cities You Must Explore This Summer</p>
        </Container>

        <Container fluid="sm" className="mt-5">
          <Row>
            <Col
              lg={7}
              style={{
                marginRight: "20px",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.6)),
              url(https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1093&q=80)`,
              }}
              className="mb-2 p-10 mid___content__card _p_2"
            ></Col>
            <Col
              style={{
                marginLeft: "auto",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.6)),
              url(https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80)`,
              }}
              lg={4}
              className="mb-2 p-10 mid___content__card "
            ></Col>
          </Row>
          <Row>
            <Col
              lg={4}
              style={{
                marginRight: "20px",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.6)),
            url(https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)`,
              }}
              className="mb-2 p-10 mid___content__card "
            ></Col>
            <Col
              lg={7}
              style={{
                marginLeft: "auto",
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.329), rgba(0, 0, 0, 0.6)),
             url(https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
              }}
              className="mb-2 p-10 mid___content__card ml-auto _p_2"
            ></Col>
          </Row>
        </Container>
      </div>
      <div className="mt-5 mb-5 bg-light py-5">
        <Container fluid="lg" className="text-center ">
          <h3>How it Works</h3>
          <p className="text-muted">
            Bringing buisness and community members together
          </p>
        </Container>
        <Container fluid="lg" className="text-center">
          <Row>
            <Col xs={12} lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    className="mb-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="mb-4"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="mb-4"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="pb-5">
        <Container fluid="sm" className="text-center">
          <h3>Testimonials From Our Customers</h3>
          <p className="text-muted">
            Find great places to stay, eat, shop or visit from local experts.
          </p>
        </Container>
        <ContentSlider />
      </div>
      <div className="Business___explosure__section">
        <Container fluid="sm" className="text-center Business__item__explosure">
          <h1 style={{ color: "white" }}>
            <strong>Get Business Exposure</strong>
          </h1>
          <p style={{ color: "#f5f5f5", fontSize: "14px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            ut accusamus quaerat molestias, odit dolorum inventore soluta.
          </p>
          <Button>How It Works</Button>
        </Container>
      </div>
      <div className="bg-light py-5">
        <Container fluid="lg" className="text-center ">
          <h3>How it Works</h3>
          <p className="text-muted">
            Bringing buisness and community members together
          </p>
        </Container>
        <Container fluid="lg" className="text-center">
          <Row>
            <Col xs={12} lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    className="mb-4"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="mb-4"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="p-3 rounded m-3">
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="mb-4"
                    src="https://cdn.mindmajix.com/mern/images/courses/aws.svg"
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Card.Title as="h6">
                    <strong> Adventure High Ropes</strong>
                  </Card.Title>
                  <Card.Text as="p" className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eius impedit quam nam repellat, tenetur eaque.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ContentComponent;
