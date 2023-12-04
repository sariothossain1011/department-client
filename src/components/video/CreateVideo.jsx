import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { API } from "../../helpers/secret";
const CreateVideo = () => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [subjectData, setSubjectData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const HandleSubjectData = async (e) => {
    e.preventDefault();
    try {
      const subjectData = new FormData();
      subjectData.append("photo", photo);
      subjectData.append("title", title);
      subjectData.append("description", description);
      subjectData.append("link", videoLink);
      subjectData.append("subjectId", subjectId);
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };

      const { data } = await axios.post(
        `https://department-server-tau.vercel.app/api/v1/create-video`,
        subjectData,
        config
      );
      if (data.error) {
        return <>{toast.error(" Create Fail")}</>;
      } else {
        navigate("/admin/createSubject");
        return <>{toast.success(" Create Successfull")}</>;
      }
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  const fetchData = async () => {
    try {
      const token = await localStorage.getItem("accessToken");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming it's a Bearer token
        },
      };
      const { data } = await axios.get(
        `https://department-server-tau.vercel.app/api/v1/find-subject-list`,
        config
      );
      const videoData = await data.data;
      setSubjectData(videoData);
    } catch (error) {
      return <>{toast.error(error)}</>;
    }
  };

  const handleSelectChange = (e) => {
    const selectedSubjectId = e.target.value;
    setSubjectId(selectedSubjectId);
  };

  return (
    <Fragment>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-10 m-auto  mb-4">
            <div className="card shadow">
              <div className="card-body">
                <form class="w-full">
                  <div class="flex flex-wrap w-full  ">
                    {photo && (
                      <img
                        src={URL.createObjectURL(photo)}
                        className="w-full h-[350px]"
                      />
                    )}
                    <div class="flex w-full h-44 items-center justify-center bg-grey-lighter">
                      <label class="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue ">
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class="mt-2 text-base leading-normal">
                          Select a Photo
                        </span>
                        <input
                          type="file"
                          name="photo"
                          accept="image/*"
                          onChange={(e) => setPhoto(e.target.files[0])}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {!photo && (
                      <p class="text-red-500 text-xs text-center italic">
                        Please select photo field.
                      </p>
                    )}

                    <div class="w-full mb-2">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-[17px] font-bold mb-2"
                        for="grid-last-name"
                      >
                        Subject Title
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Enter subject title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      {!title && (
                        <p class="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div class="w-full mb-2 ">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-[17px] font-bold mb-2"
                        for="grid-first-name"
                      >
                        Subject Description
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Enter subject name"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      {!description && (
                        <p class="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div class="w-full mb-2 ">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-[17px] font-bold mb-2"
                        for="grid-first-name"
                      >
                        Video Link
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="text"
                        placeholder="Enter Video Link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {!videoLink && (
                        <p class="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className="w-full mb-2">
                      <select
                        className="select select-bordered w-full"
                        onChange={(e) => handleSelectChange(e)}
                      >
                        <option disabled selected>
                          Select Subject ID
                        </option>
                        {subjectData &&
                          subjectData.map((item) => {
                            return (
                              <option value={item._id}>
                                {item.subjectTitle}
                              </option>
                            );
                          })}
                      </select>
                      {!subjectId && (
                        <p class="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p>
                      )}
                    </div>
                    <div className=" my-10 w-full">
                      <button
                        onClick={HandleSubjectData}
                        type="button"
                        className=" w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm  py-2 bg-blue-600 text-[20px] font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0  sm:w-full sm:text-sm"
                      >
                        Create Video
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateVideo;
