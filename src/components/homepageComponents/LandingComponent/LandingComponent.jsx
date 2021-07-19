import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./LandingComponent.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { TextField } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import TabsComponent from "../tabsComponent/tabsComponent";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchPlaces } from "../../../apiCalls/apiCalls";
import { Link, useHistory } from "react-router-dom";

const LandingComponent = () => {
  const [value, setValue] = React.useState(0);
  const [checkIn, setCheckIn] = React.useState(0);
  const [checkOut, setCheckout] = React.useState(0);
  const [allLocation, setAllLocation] = React.useState([]);
  const [reference, setReference] = React.useState("");
  const [adults, setAdults] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);
  const [, setLatLong] = React.useState({});

  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const IMAGE_1 =
    "https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
  const IMAGE_2 =
    "https://images.unsplash.com/photo-1614607653708-0777e6d003b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80";
  const IMAGE_3 =
    "https://images.unsplash.com/photo-1540567233509-b1256189865d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

  const IMAGE_MAIN =
    (value === 0 && IMAGE_1) ||
    (value === 1 && IMAGE_2) ||
    (value === 2 && IMAGE_3);

  React.useEffect(() => {
    const geoSuccess = function (position) {
      console.log(position);
    };
    const geoError = function (error) {
      console.log(error);
    };
    const getMedia = async (constraints) => {
      let stream = null;
      console.log(stream);

      try {
        stream = await navigator.geolocation.getCurrentPosition(
          geoSuccess,
          geoError
        );
        /* use the stream */
        console.log(stream);
      } catch (err) {
        /* handle the error */
      }
    };
    getMedia({ audio: true, video: true });
  }, []);

  const setLocationInput = (val) => {
    console.log(val);
    fetchPlaces(val)
      .then((res) => {
        setAllLocation(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="Landing__page__background"
      style={{
        backgroundImage: `linear-gradient(
          rgba(32, 38, 74, 0.534),
      rgba(32, 38, 74, 0.85)
    ),url(${IMAGE_MAIN})`,
      }}
    >
      <Container
        fluid="sm"
        className="text-center"
        style={{
          display: "flex",
          placeItems: "center",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
        }}
      >
        <h1 className="text-secondary">
          <strong>
            <span className="text-primary" style={{ fontSize: "4rem" }}>
              Explore
            </span>{" "}
            Amazing Destination
          </strong>
        </h1>
        <p className="text-secondary mb-5">
          Find great places to stay, eat, shop or visit from local experts.
        </p>
      </Container>
      <TabsComponent handleChange={handleChange} value={value} />
      <Row
        className="enter__list__item"
        style={{
          background: "white",
          padding: "20px",
          marginTop: "50px",
          marginBottom: "-100px",
          boxShadow: "0px 4px 13px rgba(0,0,0,0.2)",
          borderRadius: "6px",
        }}
      >
        <Col>
          <p style={{ textAlign: "left" }} className="m-0 my-2">
            Location
          </p>
          <Autocomplete
            options={allLocation}
            getOptionLabel={(option) => option.place}
            onInputChange={(e, newValue) => setLocationInput(newValue)}
            onChange={(event, newValue) => setReference(newValue?.reference)}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                variant="outlined"
                placeholder="Enter your Location"
              />
            )}
          />
        </Col>
        {value === 0 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Check In
            </p>
            <TextField
              type="date"
              fullWidth
              variant="outlined"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </Col>
        )}
        {value === 0 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Check Out
            </p>
            <TextField
              type="date"
              fullWidth
              variant="outlined"
              onChange={(e) => setCheckout(e.target.value)}
            />
          </Col>
        )}
        {value === 1 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Date
            </p>
            <TextField type="date" fullWidth variant="outlined" />
          </Col>
        )}
        {value === 2 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Date
            </p>
            <TextField
              type="date"
              fullWidth
              variant="outlined"
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </Col>
        )}
        {value === 1 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Offline / Online
            </p>
            <DropdownMenu />
          </Col>
        )}
        {value === 0 && (
          <Col>
            <p style={{ textAlign: "left" }} className="m-0 my-2">
              Guests
            </p>
            <PopoverPopupState
              adults={adults}
              setAdults={setAdults}
              children={children}
              setChildren={setChildren}
              infants={infants}
              setInfants={setInfants}
            />
          </Col>
        )}
        <Col>
          <Button
            fullWidth
            component={Link}
            to={{
              pathname: `/${reference}`,
              hotelstate: {
                reference,
                checkIn,
                checkOut,
                adults,
                children,
                infants,
              },
            }}
            color="secondary"
            variant="contained"
            style={{ marginTop: "35px", padding: "15px 2px" }}
          >
            Search
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const DropdownMenu = () => {
  const [age, setAge] = React.useState("both");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl variant="outlined" fullWidth>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={age}
        onChange={handleChange}
        label="Age"
      >
        <MenuItem value={"both"} selected>
          Both
        </MenuItem>
        <MenuItem value={"offline"}>Offline</MenuItem>
        <MenuItem value={"online"}>online</MenuItem>
      </Select>
    </FormControl>
  );
};

export const PopoverPopupState = ({
  adults,
  setAdults,
  children,
  setChildren,
  infants,
  setInfants,
}) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            fullWidth
            color="primary"
            style={{
              height: "100%",
              marginTop: "-4px",
              padding: "20px 0px",
              lineHeight: "100%",
            }}
            variant="outlined"
            {...bindTrigger(popupState)}
          >
            Add Guests
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box
              style={{
                width: "320px",

                paddingTop: "20px",
                paddingLeft: "20px",
                paddingRight: "20px",
                fontSize: "14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Adults</span>
                    <br />
                    Ages 13 or above
                  </p>
                </div>
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setAdults((prev) => (prev === 0 ? prev : prev - 1))
                    }
                  >
                    <IndeterminateCheckBoxIcon />
                  </span>
                  <span className="px-2">{adults}</span>

                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setAdults((prev) => prev + 1)}
                  >
                    <AddBoxIcon />
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Children</span>
                    <br />
                    Ages 2–12
                  </p>
                </div>
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setChildren((prev) => (prev === 0 ? prev : prev - 1))
                    }
                  >
                    <IndeterminateCheckBoxIcon />
                  </span>
                  <span className="px-2">{children}</span>

                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setChildren((prev) => prev + 1)}
                  >
                    <AddBoxIcon />
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Infants</span>
                    <br />
                    Under 2
                  </p>
                </div>
                <div>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setInfants((prev) => (prev === 0 ? prev : prev - 1))
                    }
                  >
                    <IndeterminateCheckBoxIcon />
                  </span>
                  <span className="px-2">{infants}</span>

                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setInfants((prev) => prev + 1)}
                  >
                    <AddBoxIcon />
                  </span>
                </div>
              </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default LandingComponent;
