import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import StarIcon from "@material-ui/icons/Star";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import TabsComponent from "./tabsComponent";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "70vh",
    backgroundImage: `linear-gradient(
      rgba(32, 38, 74, 0.534),
  rgba(32, 38, 74, 0.85)
),url(https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
)`,
  },
  title: {
    fontSize: "6rem",
    fontWeight: "700",
    color: "white",
    paddingTop: "25vh",
  },
  media: {
    height: 420,
  },
  sub_title: {
    fontWeight: "bold",
  },
  main: {
    marginTop: "10vh",
  },
  mini_title: {
    fontSize: "1rem",
    fontWeight: "700",
  },
}));

const SingleHotelComponent = () => {
  const [enterDetails, setEnterDetails] = React.useState({
    adults: 0,
    checkIn: 0,
    checkOut: 0,
    children: 0,
    infants: 0,
    reference: "",
  });
  const classes = useStyles();
  const location = useLocation();

  const { adults, children, infants, checkIn, checkOut } = enterDetails;

  console.log(location);

  React.useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userdetails"));
    setEnterDetails(data);
    console.log(data);
  }, []);

  const Image_Url =
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";
  return (
    <div>
      <div className={classes.root}>
        <Container>
          <h1 className={classes.title}>{location.state["hotel-name"]}</h1>
        </Container>
      </div>
      <div className={classes.main}>
        <Container>
          <Row>
            <Col xs={8}>
              <Card style={{ boxShadow: "none" }}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={Image_Url}
                    title="Contemplative Reptile"
                  />
                </CardActionArea>
                <Button
                  className="mt-2 mb-5"
                  variant="contained"
                  color="secondary"
                >
                  Guest House
                </Button>
                <Typography
                  className={classes.sub_title}
                  gutterBottom
                  variant="h2"
                  component="h2"
                >
                  Modern Guest Rooms
                </Typography>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardContent>
                  <Row className="align-items-center">
                    <Col>
                      <Typography variant="h6" component="p">
                        &#8377; {location.state["min-booking-price"]}
                        <span> / night</span>
                      </Typography>
                    </Col>
                    <Col>
                      <Typography variant="p" component="p">
                        <StarIcon color="secondary" />{" "}
                        <span style={{ fontWeight: "bold" }}>4.83</span> (12
                        reviews)
                      </Typography>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>
                      <p
                        style={{ textAlign: "left", fontWeight: "bold" }}
                        className="m-0 my-2"
                      >
                        Check In
                      </p>
                      <TextField
                        fullWidth
                        type="date"
                        name="checkIn"
                        value={checkIn}
                        variant="outlined"
                        onChange={(e) =>
                          setEnterDetails({
                            ...enterDetails,
                            checkIn: e.target.value,
                          })
                        }
                      />
                    </Col>
                    <Col xs={6}>
                      <p
                        style={{ textAlign: "left", fontWeight: "bold" }}
                        className="m-0 my-2"
                      >
                        Check In
                      </p>
                      <TextField
                        type="date"
                        name="checkIn"
                        value={checkOut}
                        fullWidth
                        variant="outlined"
                        onChange={(e) =>
                          setEnterDetails({
                            ...enterDetails,
                            checkOut: e.target.value,
                          })
                        }
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p
                        style={{ textAlign: "left", fontWeight: "bold" }}
                        className="m-0 my-2"
                      >
                        {adults + children + infants} Guests
                      </p>
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        // onChange={(e) => console.log(e.target.value)}
                      >
                        {adults + children + infants} Guests
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        component={Link}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className="my-3 "
                        rounded
                        to={"/payments"}
                      >
                        Reserve
                      </Button>
                    </Col>
                  </Row>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Typography variant="p" component="p"></Typography>

                    <Typography variant="p" component="p">
                      &#8377; {location.state["min-booking-price"]}
                      <span> / night</span>
                    </Typography>
                  </div>
                  {/* <div className="d-flex align-items-center justify-content-between mb-2">
                    <Typography variant="p" component="p">
                      ₹2,200 x 3 nights
                    </Typography>

                    <Typography variant="p" component="p">
                      &#8377; {location.state["min-booking-price"]}
                      <span> / night</span>
                    </Typography>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <Typography variant="p" component="p">
                      ₹2,200 x 3 nights
                    </Typography>

                    <Typography variant="p" component="p">
                      &#8377; {location.state["min-booking-price"]}
                      <span> / night</span>
                    </Typography>
                  </div> */}

                  <div className="d-flex align-items-center  justify-content-between border-top border-dark pt-3">
                    <Typography variant="h6" component="p">
                      Total
                    </Typography>

                    <Typography variant="h6" component="p">
                      &#8377; {location.state["min-booking-price"]}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Col>
          </Row>
        </Container>
        <TabsComponent />
      </div>
    </div>
  );
};

export default SingleHotelComponent;
