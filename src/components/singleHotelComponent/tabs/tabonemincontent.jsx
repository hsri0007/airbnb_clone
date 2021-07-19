import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  cover: {
    maxHeight: "150px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography
          variant="h5"
          color="h5"
          style={{ fontWeight: "bold", paddingBottom: "10px" }}
        >
          Premium Room
        </Typography>
        <img
          src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
          className={classes.cover}
        />
      </div>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textPrimary">
            Fits 3
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Study table
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            Private bathroom
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            LCD TV & DTH channels
          </Typography>
        </CardContent>
      </div>
    </div>
  );
}
