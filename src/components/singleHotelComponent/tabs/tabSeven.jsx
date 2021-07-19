import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Col, Container, Row } from "react-bootstrap";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {},

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
      <Typography
        style={{
          fontWeight: "bold",
          padding: "20px",
          backgroundColor: "#FFF2F7",
        }}
      >
        FabHotel S Comfort Inn Hotel Policies
      </Typography>
      <Card className={classes.root}>
        <CardContent>
          <Row>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">Check-in</Typography>
              <Typography color="textPrimary">12:00 PM</Typography>
            </Col>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">Check-out</Typography>
              <Typography color="textPrimary">12:00 PM</Typography>
            </Col>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">
                Children and Extra Beds
              </Typography>
              <Typography color="textPrimary">
                Child upto 8 years is Allowed
              </Typography>
            </Col>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">Local ID</Typography>
              <Typography color="textPrimary">Not allowed</Typography>
            </Col>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">Couple Friendly</Typography>
              <Typography color="textPrimary">Allowed</Typography>
            </Col>
            <Col sm={3} className="mb-2">
              <Typography color="textSecondary">Foreign Guest</Typography>
              <Typography color="textPrimary">Allowed</Typography>
            </Col>
          </Row>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            {!expanded ? "ReadMore" : "ReadLess"}
            <ExpandMoreIcon />
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Row>
              <Col sm={6} className="mb-3">
                <Typography style={{ fontWeight: "bold" }} color="textPrimary">
                  Local ID
                </Typography>
                <li>This hotel doesn't allow check-in using local IDs</li>
              </Col>
              <Col sm={6} className="mb-3">
                <Typography style={{ fontWeight: "bold" }} color="textPrimary">
                  Cancellation Policy
                </Typography>
                <li>
                  Free cancellation: If cancelled {">"} 24 hours before 12pm on
                  check-in date
                </li>
                <li>
                  One night charge: If cancelled {"<"} 24 hours before 12pm on
                  check-in date
                </li>
                <li>
                  No show: Entire booking cost will be charged as cancellation
                  fee
                </li>
              </Col>
              <Col sm={6} className="mb-3">
                <Typography style={{ fontWeight: "bold" }} color="textPrimary">
                  Couple Friendly
                </Typography>
                <li>This hotel welcomes unmarried couples</li>
              </Col>
              <Col sm={6} className="mb-3">
                <Typography style={{ fontWeight: "bold" }} color="textPrimary">
                  Foreign Guest
                </Typography>
                <li>
                  Foreign guests are welcome and required to produce a valid
                  passport and visa.
                </li>
              </Col>
              <Col sm={6} className="mb-3">
                <Typography style={{ fontWeight: "bold" }} color="textPrimary">
                  Children Policy
                </Typography>
                <li>
                  Maximum of one child up to the age of 8 years is allowed free
                  of charge
                </li>
                <li>
                  No complimentary breakfast and extra bed/mattress will be
                  provided
                </li>
              </Col>
            </Row>
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
}
