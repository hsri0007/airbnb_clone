import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Typography } from "@material-ui/core";
import TabMiniContent from "./tabonemincontent";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Tabone = () => {
  return (
    <Container
      style={{
        border: "solid 1px #f50057",
        padding: "0px",
        overflow: "hidden",
      }}
    >
      <div style={{ backgroundColor: "#FFF2F7" }}>
        <div
          className="py-3 px-3"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "16px" }}>Recommended For You</span>
          </div>
          <div>
            <span style={{ padding: "10px" }}>
              <span style={{ color: "#f50057", fontWeight: "bold" }}>
                LOGIN
              </span>{" "}
              for extra 5% OFF
            </span>
          </div>
        </div>
      </div>
      <div>
        <Row>
          <Col xs={5}>
            <TabMiniContent />
          </Col>
          <Col
            style={{
              //   backgroundColor: "#f6f8fa",
              borderRight: "2px solid rgba(151, 151, 151, 0.45)",
              borderLeft: "2px solid rgba(151, 151, 151, 0.45)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                justifyContent: "space-between",
              }}
            >
              <span>Room 1</span>
              <IconButton>
                <RemoveIcon />
              </IconButton>
              <span style={{ fontWeight: "bold" }}>1 Guest</span>
              <IconButton>
                <AddIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </Col>
          <Col
            style={{
              //   backgroundColor: "#f6f8fa",
              textAlign: "right",
              marginRight: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h6" color="textPrimary">
              ₹40,800
            </Typography>
            <Typography variant="p" color="textPrimary">
              for 1 guest, 25 nights
            </Typography>
            <div>
              <Button variant="outlined" color="secondary">
                Remove
              </Button>
            </div>
            <Typography variant="p" color="textPrimary">
              Get 2039+ Fab credits
            </Typography>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Tabone;
