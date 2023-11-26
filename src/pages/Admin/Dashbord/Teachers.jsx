import React from "react";
import TeacherTable from "../../../components/admin/TeacherTable";

function Teachers() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Admin</th>
            </tr>
          </thead>
          <TeacherTable></TeacherTable>
        </table>
      </div>
    </div>
  );
}

export default Teachers;
