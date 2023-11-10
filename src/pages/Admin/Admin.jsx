import React from "react";
import Example from "../../components/chart/LineChart";
import TopCard from "../../components/admin/TopCard";
import BarChart1 from "../../components/chart/BarChart";

function Admin() {
  return (
    <div className="my-10 mr-4 ">
      <div>
        <h2 className="text-xl font-bold text-start">Welcome Admin!</h2>
        <div className="my-5">
          <TopCard />
        </div>
      </div>
      <div className="mt-10 md:flex gap-3  justify-between ">
        <div className="border-1 border-red-500 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-center mb-10 uppercase text-gray-500 ">
            Students
          </h2>
          <BarChart1 />
        </div>
        <div className="border-1 border-red-500 bg-white p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-center mb-10 uppercase text-gray-500 ">
            Teachers
          </h2>
          <BarChart1 />
        </div>
      </div>
    </div>
  );
}

export default Admin;
