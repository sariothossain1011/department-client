import React, { Fragment } from "react";

const SemesterList = () => {
  return (
    <Fragment>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Photo</th>
                <th>Semester Name</th>
                <th>Semester Title</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            {/* dfgkd */}
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default SemesterList;
