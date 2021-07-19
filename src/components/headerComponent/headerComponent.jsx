import React from "react";
import { Container } from "react-bootstrap";
import "./headerComponent.css";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";
import { FiPhoneCall } from "react-icons/fi";
import Popover from "@material-ui/core/Popover";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const Hello = () => (
    <div
      style={{
        padding: "8px",
        fontSize: "0.8rem",
        background: "black",
        margin: "6px 5px",
        lineHeight: "150%",
      }}
    >
      Need Help? Call us at 01246448598
    </div>
  );

  return (
    <div className="navbar___main" style={{ overflow: "hidden" }}>
      <Container variant="sm" className="nav__items">
        <h1>SmartStay</h1>
        <div className="nav__links">
          <div className="nav__links__main">
            <Tooltip style={{ fontSize: "1.5rem" }} arrow title={<Hello />}>
              <IconButton aria-label="delete">
                <FiPhoneCall style={{ color: "white" }} />
              </IconButton>
            </Tooltip>

            <Button
              style={{ color: "white" }}
              className="mx-4"
              onClick={handleClick}
            >
              Become a Host
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <span className="Become__host__item">Host Event</span>
                <span className="Become__host__item">Host Your Home</span>
              </div>
            </Popover>
            <Button style={{ color: "white", border: "2px solid white" }}>
              Login / signup
            </Button>
          </div>
          <div className="nav__svg">
            <IconButton>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
