import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../admin.css";
import axios from "axios";
import { useState } from "react";
function Dashboard() {
  const token = localStorage.getItem("accessToken");
  const [details, setDetails] = useState();

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "https://department-server-tau.vercel.app/api/v1/find-user",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDetails(data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="admin-dashbord bg-[#F7F7FA]">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full sidebar ">
            {/* Sidebar content here */}
            {details?.role == "admin" && (
              <li className="mx-4 my-3">
                <Link
                  to="/admin"
                  className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
                >
                  Dashbord
                </Link>
              </li>
            )}

            <li className="mx-4 my-3">
              <Link
                to="editProfile"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Profile
              </Link>
            </li>
            {details?.role == "admin" && (
              <li className="mx-4 my-3">
                <Link
                  to="users"
                  className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
                >
                  All Users
                </Link>
              </li>
            )}
            {details?.role == "admin" && (
              <>

                <li>
                  <div class="flex flex-col w-full">
                    <button class="group  focus:outline-none">
                      <div class="flex items-end w-40 justify-between h-auto  font-semibold ">
                        <span class="truncate text-[17px]">Semester</span>
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center h-8 py-2 px-4 text-sm " to="createSemester">
                          Create Semester
                        </Link>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center h-8 py-2 px-4 text-sm " to="semesterList">
                          Semester List
                        </Link>
                      </div>
                    </button>
                  </div>
                </li>
                <li>
                  <div class="flex flex-col w-full">
                    <button class="group  focus:outline-none">
                      <div class="flex items-end w-40 justify-between h-auto  font-semibold ">
                        <span class="truncate text-[17px]">Subject</span>
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center py-2 h-8 px-4 text-sm" to="createSubject">
                          Create Subject
                        </Link>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center py-2 h-8 px-4 text-sm " to="subjectLsit">
                          Subject List
                        </Link>
                      </div>
                    </button>
                  </div>
                </li>
                <li>
                  <div class="flex flex-col w-full">
                    <button class="group  focus:outline-none">
                      <div class="flex items-end w-40 justify-between h-auto  font-semibold ">
                        <span class="truncate text-[17px]">Videos</span>
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center h-8 py-2 px-4 text-sm " to="createVideo">
                          Create Video
                        </Link>
                      </div>
                      <div class="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
                        <Link class="flex items-center h-8 py-2 px-4 text-sm " to="videoList">
                          Videos List
                        </Link>
                      </div>
                    </button>
                  </div>
                </li>
                <li className="mx-4 my-3">
                  <Link
                    to="addTecher"
                    className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
                  >
                    Add Teacher
                  </Link>
                </li>
              </>
            )}

            <li className="mx-4 my-3">
              <Link
                to="addBlog"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Write Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default Dashboard;
