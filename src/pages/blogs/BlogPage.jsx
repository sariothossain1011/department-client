import React, { Fragment } from "react";
import Blog from "../../components/blogs/Blog";
import {IoIosArrowForward} from "react-icons/io"
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <Fragment>
          <>
      <div className='bg-blog-banner bg-center '>
      <div className="container-mx-auto bg-black bg-opacity-30">
      <h1 className=" text-white flex justify-center text-4xl font-bold mb-5 pt-36 ">BLOG</h1>
       <div className="flex gap-4 justify-center pb-40">
       <Link to="/" >
       <h1 className=" text-white">HOME</h1>
       </Link>
        
        <IoIosArrowForward className="text-white mt-1"/>
        <h1 className=" text-white">BLOG</h1>
       </div>
      </div>
      </div>
    </>
      <Blog/>
    </Fragment>
  )
};

export default BlogPage;
