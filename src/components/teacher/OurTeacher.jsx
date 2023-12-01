import React from "react";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import { MdLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../loading/Loading";
const OurTeacher = () => {
  const {
    isLoading,
    isError,
    data: teachers,
    error,
    refetch,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: () =>
      fetch("http://localhost:8080/api/v1/find-teacher-list", {
        method: "GET",
        headers: {
          "content-type": "applicataion/json",
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return (
      <div className="h-40 mt-10">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log("teachers😘🥰", teachers);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl text-center font-bold capitalize my-10">
        Our Teacher
      </h2>
      <div className="flex justify-center flex-wrap gap-5 py-10">
        {teachers.data.length &&
          teachers.data.map((teacher) => (
            <div className="card  w-72 bg-base-100 shadow-xl" key={teacher._id}>
              <figure>
                <img
                  className=" rounded-full w-40 h-40"
                  src={teacher.image}
                  alt="profile photo"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-titel justify-center hover:text-secondary duration-500">
                  {teacher.name}
                </h2>

                <h3 className=" text-center text-xl text-secondary capitalize">
                  {teacher.designation}
                </h3>
                <h3 className=" text-center text-secondary italic capitalize">
                  {teacher.department}
                </h3>

                <div className=" flex justify-center gap-5 ">
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
                <Link to={`/teacher/${teacher._id}`}>
                  <p className=" flex justify-end text-secondary hover:text-primary duration-500 ">
                    Read More <BsArrowRight className=" mt-1 pl-1" />
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurTeacher;
