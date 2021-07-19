import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {},
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  btn: { border: "1px solid green" },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container
      style={{
        border: "solid 1px #f50057",
        padding: "0px",
        overflow: "hidden",
      }}
    >
      <Card className={classes.root}>
        <div
          className="d-flex align-items-center px-3 py-3"
          style={{ backgroundColor: "#FFF2F7" }}
        >
          <div className="d-flex align-items-center">
            <div>
              <Avatar aria-label="recipe" className={classes.avatar}>
                4.5
              </Avatar>
            </div>
            <div className="d-flex px-3 flex-column">
              <span style={{ fontWeight: "bold" }}>Fabulous</span>
              <span>121 Reviews</span>
            </div>
          </div>
          <div
            className="d-flex align-items-center justify-content-around"
            style={{ flex: 1 }}
          >
            <Button variant="outlined" className={classes.btn}>
              <CheckCircleOutlineIcon
                style={{ marginRight: "2px", color: "green" }}
              />
              Friendly Staff
            </Button>
            <Button variant="outlined" className={classes.btn}>
              <CheckCircleOutlineIcon
                style={{ marginRight: "2px", color: "green" }}
              />
              Comfortable Rooms
            </Button>
            <Button variant="outlined" className={classes.btn}>
              <CheckCircleOutlineIcon
                style={{ marginRight: "2px", color: "green" }}
              />
              Comfortable Stay
            </Button>
            <Button variant="outlined" className={classes.btn}>
              <CheckCircleOutlineIcon
                style={{ marginRight: "2px", color: "green" }}
              />
              Delicious Food
            </Button>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex px-3 flex-column">
              <span style={{ fontWeight: "bold" }}>99% guests rated 4+</span>
              <span>99% guests recommend</span>
            </div>
          </div>
        </div>
        <Row>
          <Col xs={12} sm={4}>
            <Card className="p-3 m-3">
              <Col>
                <Row
                  style={{
                    borderBottom: "1px solid grey",
                    marginBottom: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <span>5 FABULOUS</span>
                </Row>
                <Row>
                  <p>
                    Staff are so polite and gentle...location was good,rooms are
                    comfortable and first class
                  </p>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="p-3 m-3">
              <Col>
                <Row
                  style={{
                    borderBottom: "1px solid grey",
                    marginBottom: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <span>5 | FABULOUS</span>
                </Row>
                <Row>
                  <p>
                    Staff are so polite and gentle...location was good,rooms are
                    comfortable and first class
                  </p>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="p-3 m-3">
              <Col>
                <Row
                  style={{
                    borderBottom: "1px solid grey",
                    marginBottom: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <span>5 FABULOUS</span>
                </Row>
                <Row>
                  <p>
                    Staff are so polite and gentle...location was good,rooms are
                    comfortable and first class
                  </p>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="p-3 m-3">
              <Col>
                <Row
                  style={{
                    borderBottom: "1px solid grey",
                    marginBottom: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <span>5 FABULOUS</span>
                </Row>
                <Row>
                  <p>
                    Staff are so polite and gentle...location was good,rooms are
                    comfortable and first class
                  </p>
                </Row>
              </Col>
            </Card>
          </Col>
          <Col xs={12} sm={4}>
            <Card className="p-3 m-3">
              <Col>
                <Row
                  style={{
                    borderBottom: "1px solid grey",
                    marginBottom: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <span>5 FABULOUS</span>
                </Row>
                <Row>
                  <p>
                    Staff are so polite and gentle...location was good,rooms are
                    comfortable and first class
                  </p>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
