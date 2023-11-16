import React, { Fragment } from "react";
import Header from "../../components/header/Header";
import Bannar from "../../components/bannar/Bannar";
import About from "../../components/about/About";
import Teacher from "../../components/teachers/Teacher";
import Course from "../../components/courses/Course";
import Achievement from "../../components/achievement/Achievement";
import Gallery from "../../components/gallery/Gallery";
import Blog from "../../components/blogs/Blog";
import OurTeacher from "../../components/teacher/OurTeacher";
import Show from "../../components/blogs/Show";


const HomePage = () => {
  return (
    <Fragment>
      <Bannar />
      <About />
      <OurTeacher/>
      <Course />
      <Gallery />
      <div>
        <h2 className="text-3xl uppercase font-bold text-center mt-10">Blogs</h2>

      <Show />
      </div>
    </Fragment>
  );
};

export default HomePage;
