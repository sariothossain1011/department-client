import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex gap-8">
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
            <li className="mx-4 my-3">
              <Link
                to="/admin"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Dashbord
              </Link>
            </li>
            <li className="mx-4 my-3">
              <Link
                to="/admin"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Profile Edit
              </Link>
            </li>
            <li className="mx-4 my-3">
              <Link
                to="/allstudent"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                All Users
              </Link>
            </li>
            <li className="mx-4 my-3">
              <Link
                to="/allstudent"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Add Course
              </Link>
            </li>
            <li className="mx-4 my-3">
              <Link
                to="/allstudent"
                className="text-[16px] font-bold md:hover:text-[#256CF0] duration-500"
              >
                Add Course
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
