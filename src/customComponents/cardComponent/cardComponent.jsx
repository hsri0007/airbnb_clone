import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import StarIcon from "@material-ui/icons/Star";
import { Col, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import StarsRoundedIcon from "@material-ui/icons/StarsRounded";
import CallIcon from "@material-ui/icons/Call";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 320,
    padding: 0,
    // background: "#424566",
    // boxShadow: "20px 20px 60px #3d405f,-20px -20px 60px #474a6d",
  },
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
  layerimg: {
    backgroundColor: "rgba(0,0,0,33%)",
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0",
    padding: "10px",
  },
}));

export default function RecipeReviewCard({ data, states }) {
  const classes = useStyles();

  console.log(data);
  console.log(states);

  return (
    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: `/hotels/${data["hotel-id"]}`,
        state: data,
        states,
      }}
    >
      <Card className={classes.root}>
        <div style={{ position: "relative" }}>
          <CardMedia
            className={classes.media}
            image="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
            title="Paella dish"
          />
          <div className={classes.layerimg}>
            <div style={{ display: "flex" }}>
              <div>
                <Button
                  size="small"
                  variant="outlined"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    fontWeight: "300",
                    fontSize: "10px",
                  }}
                >
                  asdasd
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  style={{
                    color: "white",
                    border: "1px solid white",
                    fontWeight: "300",
                    marginLeft: "10px",
                    fontSize: "10px",
                  }}
                >
                  asdasd
                </Button>
              </div>

              <Button
                size="small"
                variant="contained"
                color="secondary"
                style={{
                  color: "white",

                  fontWeight: "300",
                  marginLeft: "auto",
                  fontSize: "10px",
                }}
              >
                Featured
              </Button>
            </div>
            <div style={{ marginTop: "90px" }}>
              <p
                style={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <span style={{ marginLeft: "5px", marginTop: "5px" }}>
                  ( 5 reviews )
                </span>
              </p>
            </div>
          </div>
        </div>
        <CardContent>
          <div>
            <div
              style={{
                marginLeft: "85%",
                marginTop: "-40px",
                zIndex: "1",
                position: "relative",
                color: "black",
              }}
            >
              <StarsRoundedIcon
                style={{
                  fontSize: "40px",
                  borderRadius: "100%",
                  backgroundColor: "white",
                }}
              />
            </div>
          </div>
          <Row>
            <Col>
              <h6 style={{ fontSize: "14px", fontWeight: "bold" }}>
                Adventure High Ropes
              </h6>
            </Col>
          </Row>
          <Typography variant="body2" color="textSecondary" component="p">
            825 kilometres away 825 kilometres away 825 kilometres away
          </Typography>
        </CardContent>
        <CardContent style={{ paddingTop: 0 }}>
          <Row>
            <Col>
              <h6 style={{ fontSize: "14px" }}>
                <CallIcon /> Call
              </h6>
            </Col>
            <Col>
              <h6 style={{ fontSize: "14px" }}>
                <LocationOnIcon /> New York
              </h6>
            </Col>
          </Row>
        </CardContent>
        <CardActions disableSpacing>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
              <h6 style={{ fontSize: "14px", marginLeft: "10px" }}>New York</h6>
            </div> */}
            <div>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </div>
          </div>
        </CardActions>
      </Card>
    </Link>
  );
}
