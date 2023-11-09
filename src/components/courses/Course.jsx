import React, { Fragment } from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <Fragment>
      <div className=' container-[1280px]'>
        <div className='text-red-500 text-center'>
          <h1 className='h-5'>All Courses</h1>
        </div>
        <div className='mx-8 my-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-between '>
          <CourseCard/>
          <CourseCard/>
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