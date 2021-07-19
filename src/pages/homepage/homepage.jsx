import React from "react";
import LandingComponent from "../../components/homepageComponents/LandingComponent/LandingComponent";
import ContentComponent from "../../components/homepageComponents/contentComponent/contentComponent";
import Header from "../../components/headerComponent/headerComponent";
const HomePage = () => {
  return (
    <div>
      <Header />
      <LandingComponent />
      <ContentComponent />
    </div>
  );
};

export default HomePage;
