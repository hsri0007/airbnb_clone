import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TabOne from "./tabs/tabone";
import TabTwo from "./tabs/tabtwo";
import TabThree from "./tabs/tabthree";
import TabFour from "./tabs/tabFour";
import TabSeven from "./tabs/tabSeven";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="SELECT ROOM" {...a11yProps(0)} />
        <Tab label="ABOUT HOTEL" {...a11yProps(1)} />
        <Tab label="HOTEL AMENITIES" {...a11yProps(2)} />
        <Tab label="RATINGS & REVIEWS" {...a11yProps(3)} />
        <Tab label="HOTEL POLICIES" {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <TabOne />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabTwo />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TabThree />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <TabFour />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <TabSeven />
      </TabPanel>
    </Paper>
  );
}
