import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Footer from "../Components/Footer/Index";
import Header from "../Components/Header/Index";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Resume from "../Pages/Resume";
import Skills from "../Pages/Skills";
import ContactUs from "../Pages/ContactUs";
const RouterComponent = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/skills" element={<Skills />} />

          <Route path="/resume" element={<Resume />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default RouterComponent;
