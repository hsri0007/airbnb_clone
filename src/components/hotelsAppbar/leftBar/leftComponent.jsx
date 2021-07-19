import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Box, Button } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
export default function PaymentForm() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        width: "30vw",
      }}
    >
      <TextField
        margin="normal"
        id="outlined-basic"
        label={
          <span style={{ background: "white", padding: "0px 3px" }}>
            What are you looking for?
          </span>
        }
        variant="outlined"
      />
      <FormControl variant="outlined" margin="normal">
        <InputLabel style={{ background: "white", padding: "0px 3px" }}>
          All Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" margin="normal">
        <InputLabel style={{ background: "white", padding: "0px 3px" }}>
          Location
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box style={{ margin: "20px 0px" }}>
        <h6>Radius around selected destination</h6>
        <Slider
          //   value={value} onChange={handleChange}
          aria-labelledby="continuous-slider"
        />
        <Button variant="contained">50km</Button>
      </Box>
      <FormControl variant="outlined" margin="normal">
        <InputLabel style={{ background: "white", padding: "0px 3px" }}>
          Price Range
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          //   value={age}
          //   onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Box style={{ margin: "20px 0px" }}>
        <h3>Tags</h3>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} /> Accepts
          Credit Cards
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} />
          Smoking Allowed
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} /> Bike Parking
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} />
          Street Parking
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} />
          Wireless Internet
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} />
          Alcohol
        </Box>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input type="checkbox" style={{ marginRight: "5px" }} /> Pet Friendly
        </Box>
      </Box>
      <Button
        color="primary"
        margin="normal"
        variant="contained"
        style={{ margin: "20px 0px" }}
      >
        Search
      </Button>
      <Button>Reset Filter</Button>
    </div>
  );
}
