import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import { ContactsOutlined } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import { TextField } from "@material-ui/core";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import LeftBar from "./leftBar/leftBar";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Link, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  span__styles: {
    background: "white",
    padding: "0px 4px",
    fontSize: "16px",
    fontweight: "bold",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ state }) {
  const [userDetails, setUserDetails] = React.useState({
    reference: "",
    checkIn: 0,
    checkOut: 0,
    adults: 0,
    children: 0,
  });

  const [adults, setAdults] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);
  const classes = useStyles();

  React.useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("userdetails"));
    setUserDetails(data);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "white",
          height: "12vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={2}
            style={{ display: "flex", alignItems: "center" }}
            sm={12}
          >
            <Grid item xs={3} style={{ display: "flex", alignItems: "center" }}>
              {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon />
              </IconButton> */}
              <TextField
                size="small"
                variant="outlined"
                value={"hyderabad"}
                label={<span className={classes.span__styles}>Location</span>}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                variant="outlined"
                value={userDetails.checkIn}
                label={<span className={classes.span__styles}>Check In</span>}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                size="small"
                value={userDetails.checkOut}
                label={<span className={classes.span__styles}>Check Out</span>}
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={5} style={{ display: "flex", alignItems: "center" }}>
              <PopoverPopupState
                adults={adults}
                setAdults={setAdults}
                children={children}
                setChildren={setChildren}
                infants={infants}
                setInfants={setInfants}
              />
              <IconButton style={{ padding: 0, marginLeft: "40px" }}>
                <SearchIcon style={{ color: "black", fontSize: "28px" }} />
              </IconButton>

              <LeftBar />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

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
            size="large"
            style={{ marginBottom: "7px" }}
            fullWidth
            color="primary"
            variant="outlined"
            {...bindTrigger(popupState)}
          >
            3 Guests
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
