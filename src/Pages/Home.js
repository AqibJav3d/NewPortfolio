import React from "react";
import About from "../Components/About/Index";
import HomeFront from "../Components/HomeFront/Index";
import Portfolio from "../Components/RecentPortfolio/portfolio";
import Resume from "../Components/Resume/Index";
import Skills from "../Components/Skills/Index";

const Home = () => {
  return (
    <div>
      <HomeFront />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
    </div>
  );
};

export default Home;
