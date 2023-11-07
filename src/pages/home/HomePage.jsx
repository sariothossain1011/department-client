import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Bannar from "../../components/bannar/Bannar";
import About from "../../components/about/About";
import Teacher from "../../components/teachers/Teacher";
import Course from "../../components/courses/Course";
import Achievement from "../../components/achievement/Achievement";
import Gallery from "../../components/gallery/Gallery";
import Blog from "../../components/blogs/Blog";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Bannar />
      <About />
      <Teacher />
      <Course />
      <Achievement />
      <Gallery />
      <Blog />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
