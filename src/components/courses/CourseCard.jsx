import axios from 'axios';
import React, { Fragment, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { API } from '../../helpers/secret';

const CourseCard = () => {



  const [semester ,setSemester] =useState([])

  useEffect(() => {
     fetchData();
  },[]);
  
  const fetchData = async () => {
    try {
      const {data} = await axios.get(`${API}find-course-list`);
      
      const semesterData = await data.data ;
      setSemester(semesterData)
      
    } catch (error) {
          console.log("......error", error);
        }

    }

  
  


  return (
    <Fragment>
      <div className='mx-8 my-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-between '>
     
        {semester && semester.map((item,index)=>{
          return(
            <div className="card w-100  bg-base-100 shadow-xl " key={index}>
              <figure>
          <img src={item.photo} alt="Shoes" />
        </figure>
        <div className="card-body indicator ">
        <span class="indicator-item indicator-start ms-20 badge badge-secondary p-3">{item.semesterName}</span>
          <div className="card-title ">
          <Link to={`/courses/${item._id}`}><h1>{item.semesterTitle}</h1></Link>
          </div>
          <div className="card-actions justify-between">
            <div className=""> 30 vodes</div>
            <div className="">300+ students</div>
          </div>
        </div>
            </div>
          )
        })}
        
      
      </div>
    </Fragment>
  );
};

export default CourseCard;
