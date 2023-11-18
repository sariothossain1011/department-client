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
              <li className="mx-4 my-3">
                <Link
                  to="addCourse"
                  className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
                >
                  Add Course
                </Link>
              </li>
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
