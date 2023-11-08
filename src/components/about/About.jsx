import React from 'react'
import about from "../../assets/about.jpg"
const About = () => {
  return (
    <div className=" container mx-auto my-10">
      <h2 className="text-4xl text-center font-bold capitalize my-10">
        About Our Institute
      </h2>
      <div className="flex justify-between gap-10 items-center">
   
          <img src={about} alt="Album" className="h-[50vh] rounded-lg" />
    
        <div className="flex flex-col">
          <h2 className="text-3xl justify-between">
            Cox's Bazar Polytechnic Institute.
          </h2>
          <p className='text-[16px] my-5'>
            Cox's Bazar Polytechnic Institute is a technical institutions in
            Bangladesh. This polytechnic institute was established in 2004. This
            organization currently has 4 departments running in the four-year
            Diploma-in-Engineering course
          </p>
          <div className=" flex justify-end">
            <button className="btn bg-[#0A57E5] hover:bg-[#0A57E5] text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About