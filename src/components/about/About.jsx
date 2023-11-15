import React from "react";
import about from "../../assets/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" container mx-auto my-10">
      <h2 className="text-4xl text-center font-bold capitalize py-10">
        About Our Institute
      </h2>
      <div className="flex justify-between gap-10 items-center">
        <img src={about} alt="Album" className="h-[50vh] rounded-lg bg-secondary p-3" />

        <div className="flex flex-col">
          <h2 className="text-3xl justify-between">
            Cox's Bazar Polytechnic Institute.
          </h2>
          <p className="text-[16px] my-5">
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
          <div className=" flex justify-end">
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
