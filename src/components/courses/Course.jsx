import React, { Fragment } from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <Fragment>
      <div className=' container'>
        <div className='text-red-500 text-center'>
          <h1 className='h-5'>All Courses</h1>
        </div>
        <div className='mx-8 my-4 grid grid-cols-3 gap-4 justify-between '>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
          <CourseCard/>
        </div>
      </div>
    </Fragment>
  )
}

export default Course