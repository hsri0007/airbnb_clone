import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

export default function AddressForm() {
  return (
    <div style={{ border: "1px solid #1e254a", height: "60vh" }}>
      <Typography
        variant="h6"
        style={{ padding: "10px", background: "#1e254a", color: "white" }}
      >
        Primary Guest Details
      </Typography>
      <form style={{ padding: "30px" }}>
        <Grid container spacing={3}>
          <Grid item container spacing={3} xs={8}>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Mobile Number"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Full name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Email"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12}>
              <span>GST number (optional)</span>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: "10px" }}
              >
                Pay@Hotel ₹3,554
              </Button>
              {"  or  "}
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "10px" }}
              >
                Pay Now ₹3,554
              </Button>
            </Grid>
          </Grid>
          <Grid item container spacing={3} xs={4}>
            <Grid item xs={12}>
              <Typography variant="p" gutterBottom>
                <BookmarkBorderIcon /> 137 Fab credits will be added after
                check-out.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
