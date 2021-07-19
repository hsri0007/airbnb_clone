import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import { Col, Container, Row } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Container
      style={{
        border: "solid 1px #f50057",
        padding: "0px",
        overflow: "hidden",
      }}
    >
      <Typography
        style={{
          fontWeight: "bold",
          padding: "20px",
          backgroundColor: "#FFF2F7",
        }}
      >
        Hotel Amenities
      </Typography>
      <Row className={classes.root}>
        <Col sm={2}>
          <li>24X7 Security </li>
        </Col>
        <Col sm={2}>
          <li> Free Wifi</li>
        </Col>
        <Col sm={2}>
          <li> Wardrobe or Closet</li>{" "}
        </Col>
        <Col sm={2}>
          <li>Mineral Water Bottle</li>
        </Col>
        <Col sm={2}>
          <li>Daily Housekeeping</li>
        </Col>
        <Col sm={2}>
          <li>LCD TV</li>
        </Col>
        <Col sm={2}>
          <li>Clean Towels</li>
        </Col>
        <Col sm={2}>
          <li>Clean Linen</li>
        </Col>
        <Col sm={2}>
          <li>Toilet Paper</li>
        </Col>
        <Col sm={2}>
          <li>Wake-Up Service</li>
        </Col>
        <Col sm={2}>
          <li>DTH Channels</li>
        </Col>
        <Col sm={2}>
          <li>Tile/Marble floor</li>
        </Col>
        <Col sm={2}>
          <li>24-Hour Front Desk</li>
        </Col>
      </Row>
    </Container>
  );
}
