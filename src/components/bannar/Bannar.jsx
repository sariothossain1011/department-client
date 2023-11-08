import React from 'react'
import {FiUserPlus} from "react-icons/fi"
import {IoMdAdd} from "react-icons/io"

const Bannar = () => {
  return (
    <>
      <div className='bg_img'>
        <div className="banner-wrapper">
          <div className="banner-content">
            <div className="banner-sub-title">
                  #IMPROVING LIVES THROUGH LEARNING
            </div>
            <h1 className='banner-heading'>     
              World class Best Learning 
            </h1>
            <p className='banner-title'>
              We believe everyone has the capacity to be creative. Turitor is a place where people develop their own potential.
            </p>
            <div className="banner-btn">
              <a href="#" className='banner-trial-btn'><FiUserPlus/> Start Trail</a>
              <a href="#" className='banner-course-btn'><IoMdAdd className='text-[#fff]'/> View Course</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bannar