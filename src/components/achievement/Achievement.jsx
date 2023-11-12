import React from 'react'
import {BsFillPlayFill} from "react-icons/bs"

const Achievement = () => {
  return (
    <div className='container mx-auto py-10 max-[1024px]:px-[20px]'>
      <h1 className='text-[25px] font-sans font-bold'>Notice Board</h1>
      <div className='ml-3 pt-4'>
        <a class="d-flex align-items-center gap-2" role="button" href="./ReactJSNotesForProfessionals.pdf" download="./ReactJSNotesForProfessionals.pdf"> <BsFillPlayFill className=' text-teal-900 text-[22px]' /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eligendi.. </a>
        <a class="d-flex align-items-center gap-2" role="button" href="./ReactJSNotesForProfessionals.pdf" download="./ReactJSNotesForProfessionals.pdf"> <BsFillPlayFill className=' text-teal-900 text-[22px]' /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eligendi.. </a>
        <a class="d-flex align-items-center gap-2" role="button" href="./ReactJSNotesForProfessionals.pdf" download="./ReactJSNotesForProfessionals.pdf"> <BsFillPlayFill className=' text-teal-900 text-[22px]' /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eligendi.. </a>
        <a class="d-flex align-items-center gap-2" role="button" href="./ReactJSNotesForProfessionals.pdf" download="./ReactJSNotesForProfessionals.pdf"> <BsFillPlayFill className=' text-teal-900 text-[22px]' /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, eligendi.. </a>
      </div>
    </div>
  )
}

export default Achievement