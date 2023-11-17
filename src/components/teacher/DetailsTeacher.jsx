import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";
function DetailsTeacher() {
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
              src="https://htmldemo.zcubethemes.com/qeducato/img/team/team01.jpg"
              alt="Teachar Image"
              className=" bg-[#777] p-3"
            />
          </div>
          <div className=" md:w-3/5">
            <h1 className=" text-5xl font-semibold text-titel">
              Ronal Anderson
            </h1>
            <p className="text-[#777] py-5">
              The world of search engine optimization is complex.
            </p>
            <h2 className=" text-titel text-3xl font-semibold pb-2">
              Teacher Info
            </h2>
            <ul>
              <li>
                <span className=" font-semibold">Degrees:</span>{" "}
                <span>
                  <a href="#">BSC IN CSE</a> <a href="#">MSC IN EEE</a>
                </span>
              </li>
              <li>
                <span className=" font-semibold">Institute:</span>{" "}
                <span>BPI</span>
              </li>
              <li>
                <span className=" font-semibold">Teachers Id:</span>{" "}
                <span>AB7876A6</span>
              </li>
              <li>
                <span className=" font-semibold">Number:</span>{" "}
                <span>
                  <a href="#">(756) 447 5744</a>
                </span>
              </li>
              <li>
                <span className=" font-semibold">Address:</span>{" "}
                <span>246, 2st AVE, Manchester 126 , Noth England</span>
              </li>
            </ul>
            <div className="">
              <h1 className=" text-titel text-3xl font-semibold py-3">
                Bio
              </h1>
              <p className="text-[#777]">
                Fusce eleifend donec sapien sed phase lusa pellentesque
                lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu avamus
                nda leo Etiam ind arcu. Morbi justo mauris tempus pharetra
                interdum at congue semper purus. Lorem ipsum dolor sit.The world
                of search engine optimization is complex and ever-changing, but
                you can easily understand the basics.
              </p>
              <div className=" flex justify-right gap-5 pt-5">
                <BiLogoFacebook className=" w-8 h-8 p-1 rounded-full border text-white bg-primary  " />
                <BiLogoInstagram className=" w-8 h-8 p-1 rounded-full border text-white bg-red-600 " />
                <RiTwitterXFill className=" w-8 h-8 p-1 rounded-full border text-white bg-black  " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsTeacher;
