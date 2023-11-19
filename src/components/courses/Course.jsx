import React, { Fragment } from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <Fragment>
      <div className=' container-[1280px]'>
        <div className=' text-center'>
          <h1 className='h-5 text-3xl font-bold my-10'>All Courses</h1>
        </div>
          <CourseCard/>
      </div>
    </Fragment>
  )
}

export default Course