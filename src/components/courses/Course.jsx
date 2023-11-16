import React, { Fragment } from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <Fragment>
      <div className=' container-[1280px]'>
        <div className=' text-center'>
          <h1 className='h-5 text-3xl font-bold my-10'>All Courses</h1>
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