import React from 'react'
import OurTeacher from '../../components/teacher/OurTeacher'
import {IoIosArrowForward} from "react-icons/io"
import { Link } from "react-router-dom";
const TeacherPages = () => {
  return (
    <>
    <div className='bg-blog-banner bg-center '>
    <div className="container-mx-auto bg-black bg-opacity-30">
    <h1 className=" text-white flex justify-center text-4xl font-bold mb-5 pt-36 ">Our Teacher</h1>
     <div className="flex gap-4 justify-center pb-40">
     <Link to="/" >
     <h1 className=" text-white">HOME</h1>
     </Link>
      
      <IoIosArrowForward className="text-white mt-1"/>
      <h1 className=" text-white">Our Teacher</h1>
     </div>
    </div>
    </div>
    <OurTeacher/>
  </>
  
  )
}

export default TeacherPages