import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../loading/Loading";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";

function DetailsTeacher() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getTeacher() {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/api/v1/find-teacher-data/${id}`
        );
        if (data.data) {
          setIsLoading(false);
          setTeacher(data.data);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);

        console.error(error);
      }
    }
    getTeacher();
  }, []);

  if (isLoading) {
    return (
      <div className="h-40 ">
        <Loading />
      </div>
    );
  }
  console.log(teacher);
  return (
    <div>
      <div className="bg-blog-banner bg-center ">
        <div className="container-mx-auto bg-black bg-opacity-30">
          <h1 className=" text-white flex justify-center text-4xl font-bold mb-5 pt-36 ">
            Teacher Details
          </h1>
          <div className="flex gap-4 justify-center pb-40">
            <Link to="/">
              <h1 className=" text-white">HOME</h1>
            </Link>

            <IoIosArrowForward className="text-white mt-1" />
            <h1 className=" text-white">Teacher Details</h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-24">
        <div className="md:flex md:gap-10 ">
          <div className=" md:w-2/5  ">
            <img
              src={teacher.image}
              alt="Teachar Image"
              className=" bg-[#777] p-3"
            />
          </div>
          <div className=" md:w-3/5">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-titel">
              {teacher.name}
            </h1>

            <h2 className=" text-titel text-2xl  py-2">Teacher Info</h2>
            <ul>
              <li>
                <span className=" font-semibold">Position: </span>
                <span>{teacher.designation}</span>
              </li>
              <li>
                <span className=" font-semibold">Department: </span>
                <span>{teacher.department}</span>
              </li>
              <li>
                <span className=" font-semibold">Institute:</span>{" "}
                <span>Cox's Bazar Polytechnic Institute.</span>
              </li>
            </ul>
            <div className="">
              <h1 className=" text-titel text-3xl font-semibold py-3">Bio</h1>
              <p className="text-[#777]">{teacher?.bio}</p>
              <div className=" flex justify-right gap-5 pt-5">
                <Link to={teacher.facebookLink}>
                  <BiLogoFacebook className=" w-10 h-10 p-2 rounded-full border hover:text-white hover:bg-secondary duration-500 cursor-pointer " />
                </Link>
                <a href={`mailto:${teacher.email}`}>
                  <MdOutlineMailOutline className=" w-10 h-10 p-2 rounded-full border hover:text-white hover:bg-secondary duration-500 cursor-pointer " />
                </a>
                <a href={`tel:${teacher.mobile}`}>
                  <MdLocalPhone className=" w-10 h-10 p-2 rounded-full border hover:text-white hover:bg-secondary duration-500 cursor-pointer " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTeacher;
