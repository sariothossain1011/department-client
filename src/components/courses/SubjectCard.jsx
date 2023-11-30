import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import { API } from "../../helpers/secret";
const SubjectCard = () => {
    const {semesterId} = useParams();


   const [subject, setSubject] = useState([]);

   
  useEffect(() => {
    fetchSubjectData();
  }, [semesterId]);

  const fetchSubjectData = async () => {
    try {
      if (semesterId) {
        const { data } = await axios.get(
          `${API}course-find-subject/${semesterId}`
        );
        const subjectData = await data.data;
        setSubject(subjectData);
        
        if (subjectData && subjectData.length > 0) {
          fetchVideoData(subjectData[0]._id);
        }
      }
    } catch (error) {
      console.log("Subject Error", error);
    }
  };
  return (
    <Fragment>
      <div className="mx-8 my-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 justify-between ">
        {subject && subject.map((item,index)=>(
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg w-full h-64"
              src={item.subjectImage}
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                {item.subjectTitle}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.subjectDescription}
            </p>
            <a
              href={`/courses/${semesterId}/${item._id}/videos`}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more <FaArrowRight className="mt-1 ml-2" />
            </a>
          </div>
        </div>
        ))}
      </div>
    </Fragment>
  );
};

export default SubjectCard;
