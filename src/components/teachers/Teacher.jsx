import React, { useEffect, useState } from 'react'
import SingleTeacherCard from './SingleTeacherCard'


const Teacher = () => {

  const fakeTeachers = [
    { name: 'abc', id: 1, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 2, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 3, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 4, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 5, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 6, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 7, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 8, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
    { name: 'abc', id: 9, number: '018', email: 'abc@gmail.com', Photo: 'https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png' },
  ]
  // console.log(fakeTeachers);

  // Stats
  const [slice, setSlice] = useState(false);
  const [sliceJob, setSliceJob] = useState(fakeTeachers);

  useEffect(() => {

    if (slice) {
      setSliceJob(fakeTeachers)
    }
    else {
      const jobsQuantity = fakeTeachers.slice(0, 6);
      setSliceJob(jobsQuantity)
    }
  }, [slice])


  return (
    <div className='w-full'>
      <div className='border-b-4 border-[#F7A510] w-fit p-4 text-center font-bold text-5xl mx-auto'>ALL-TEACHER'S</div>
      <div className='grid grid-cols-3 my-5 gap-5 px-8'>
        {sliceJob.map(singleTeacher => <SingleTeacherCard key={singleTeacher.id} singleTeacher={singleTeacher}></SingleTeacherCard>)}
      </div>
      <div className='text-center mt-10'>
        <button onClick={() => setSlice(!slice)} className="btn btn-warning text-base font-bold">See all teachers </button>
      </div>
    </div>
  )
}

export default Teacher