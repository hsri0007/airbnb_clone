import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container } from "react-bootstrap";
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
        About FabHotel S Comfort Inn, Indiranagar, Bangalore
      </Typography>
      <div className={classes.root}>
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            Hotel S Comfort Inn is among the most preferred budget hotels in
            Bangalore for both business travelers and tourists seeking a
            comfortable stay. Hotel S Comfort Inn is among the most preferred
            budget hotels in Bangalore for both business travelers and tourists
            seeking a comfortable stay. Hotel S Comfort Inn is among the most
            preferred budget hotels in Bangalore for both business travelers and
            tourists seeking a comfortable stay.
          </Typography>
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
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </div>
    </Container>
  );
}
