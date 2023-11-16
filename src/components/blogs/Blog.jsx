import React from "react";
import Show from "./Show";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Blog = () => {
  return (
    <div>
      <div className="bg-blog-banner bg-center ">
        <div className="container-mx-auto bg-black bg-opacity-30">
          <h1
            data-aos="flip-down"
            data-aos-duration="3000"
            className="text-3xl flex justify-center text-center  font-bold mb-5 pt-36 text-[#004fe1] uppercase"
          >
            All <span className="text-[#f80]">Blogs</span>
          </h1>
          <div className="flex gap-4 justify-center pb-40">
            <Link to="/">
              <h1 className=" text-white">HOME</h1>
            </Link>

            <IoIosArrowForward className="text-white mt-1" />
            <h1 className=" text-white">BLOG</h1>
          </div>
        </div>
      </div>
      <Show />
    </div>
  );
};

export default Blog;
