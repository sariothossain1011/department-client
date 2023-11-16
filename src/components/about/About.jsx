import React from "react";
import about from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" container mx-auto my-10">
      <h2 className="text-4xl text-center font-bold capitalize py-10">
        About Our Institute
      </h2>
      <div className="flex lg:flex-row flex-col lg:justify-between items-center lg:gap-5 w-full">
        <div className="lg:w-[40%]">
          <img src={about} alt="Album" className="object-cover rounded-lg bg-secondary p-1 hover:p-0 duration-300" />
        </div>

        <div className="flex flex-col lg:w-[60%]">
          <h2 className="lg:text-3xl text-2xl font-bold lg:mt-0 mt-4 p-2 lg:p-0">
            Cox's Bazar Polytechnic Institute.
          </h2>
          <p className="text-[16px] p-2 lg:p-0 mt-2 text-justify">
            Computer department will play a unique role to make oneself as a
            self-reliant person in the information technology dependent world
            and keep oneself engaged with multi-faceted employment. In addition,
            computer department is essential in making the country economically
            prosperous. You can develop yourself as an IT expert, software
            engineer, web developer. CSE is basically an engineering course
            where basic subjects related to computer software and hardware are
            taught. It should be remembered that to become a computer engineer,
            it is necessary to have the ability to think new things and have
            very good analysis. Here the main topics related to the department
            are - Operating system, Design & analysis of Algorithm, programming
            language, computer software, Database management system,
            Microprocessor, Network Administratin etc. CSE department has any
            kind of job opportunities in government or private. That is-
            Programmer, Network Administrator, Information system Analyst,
            Software Engineer, Web developer, Cyber ​​security, Artificial
            Intelligence, Database & data mining, Data Analysis, Computer
            Graphics & visualization, Game development etc... Computet
            Engineering is an academic course that equips students with the
            knowledge and skills necessary to pursue a career in computer
            engineering.
          </p>
          <div className=" flex lg:justify-end ms-2 lg:ms-0 my-2">
            <Link to="about">
              <button className="btn bg-[#0A57E5] hover:bg-[#0A57E5] text-white">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
